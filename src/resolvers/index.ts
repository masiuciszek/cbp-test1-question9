import {
  Ctx,
  ShoeInput,
  PostInput,
  Shoe,
  UserInput,
  UserUpdateInput,
} from "../types"
import User from "../models/User"
import Post from "../models/Post"

const resolvers = {
  Query: {
    getUsers: async () => {
      const users = await User.find({})
      return users
    },
    getPosts: async () => {
      const posts = await Post.find().populate("author")
      return posts
    },

    getUserById: async (
      parent: never,
      args: { id: string },
      { req, res }: Ctx,
    ) => {
      const user = await User.findById(args.id)
      return user
    },
    shoes: (_: never, args: { input: ShoeInput }) => {
      return [
        { brand: "NIKE", size: 12, sport: "football" },
        { brand: "JORDAN", size: 13, sport: "basketball" },
        { brand: "REEBOK", size: 11, season: "winter" },
        { brand: "ADIDAS", size: 15, season: "summer" },
      ] as Shoe[]
    },
  },

  Mutation: {
    createUser: async (
      _: never,
      args: { input: UserInput },
      { req, res }: Ctx,
    ) => {
      try {
        const newUser = await new User(args.input)
        if (!newUser) {
          throw new Error("something wrong happend")
        }

        await newUser.save()

        return newUser
      } catch (err) {
        console.log(err.message)
      }
    },

    updateUser: async (
      _: never,
      args: { id: string; input: UserUpdateInput },
    ) => {
      const user = await User.findById(args.id)

      const data = {
        firstName: args.input.firstName
          ? args.input.firstName
          : user?.firstName,
        lastName: args.input.lastName ? args.input.lastName : user?.lastName,
        address: args.input.address ? args.input.address : user?.address,
        email: args.input.email ? args.input.email : user?.email,
      }

      const newUser = await User.findByIdAndUpdate(args.id, data, {
        new: true,
      })

      await newUser?.save()

      return newUser
    },

    createPost: async (
      _: never,
      args: { input: PostInput },
      { req, res }: Ctx,
    ) => {
      console.log(args.input)
      const newPost = await new Post(args.input)

      if (!newPost) {
        throw new Error("something wrong happend")
      }
      await newPost.save()
      return newPost
    },
  },
  // for the shoe interface
  Shoe: {
    __resolveType(shoe: Shoe) {
      if (shoe.sport) return "Sneaker Shoe!!!"
      return "Running shoe"
    },
  },
}

export default resolvers

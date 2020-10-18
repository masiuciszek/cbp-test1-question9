import { Ctx, PostInput, UserInput, UserUpdateInput } from "../types"
import User from "../models/User"
import Post from "../models/Post"

const resolvers = {
  Query: {
    getUsers: async (
      parent: never,
      args: never,
      { req, res }: Ctx,
      info: never,
    ) => {
      const users = await User.find({})
      return users
    },
    getPosts: async (
      parent: never,
      args: never,
      { req, res }: Ctx,
      info: never,
    ) => {
      console.log(info)
      const posts = await Post.find()
      return posts
    },

    getUserById: async (
      parent: never,
      args: { id: string },
      { req, res }: Ctx,
      info: never,
    ) => {
      const user = await User.findById(args.id)
      return user
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
      // const{id,input:{}}=args

      const data = {
        firstName: args.input.firstName
          ? args.input.firstName
          : user?.firstName,
        lastName: args.input.lastName ? args.input.lastName : user?.lastName,
        address: args.input.address ? args.input.address : user?.address,
        email: args.input.email ? args.input.email : user?.email,
      }

      console.log(data)

      const newUser = await User.findByIdAndUpdate(args.id, data, {
        new: true,
      })

      await newUser?.save()

      return newUser
    },

    createPost: async (
      parent: never,
      args: { post: PostInput },
      { req, res }: Ctx,
      info: never,
    ) => {
      const newPost = await new Post(args.post)

      if (!newPost) {
        throw new Error("something wrong happend")
      }
      await newPost.save()
      return newPost
    },
  },
}

export default resolvers

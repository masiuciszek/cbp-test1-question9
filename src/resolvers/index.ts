import { Ctx, PostInput, UserInput } from "../types"
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
      try {
        const users = await User.find({})
        return users
      } catch (err) {
        res.status(500)
        console.error("server error")
      }
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
      parent: never,
      args: { user: UserInput },
      { req, res }: Ctx,
      info: never,
    ) => {
      try {
        const newUser = await new User(args.user)
        if (!newUser) {
          throw new Error("something wrong happend")
        }
        await newUser.save()
        return newUser
      } catch (err) {
        res.status(500)
        console.error(err, "server error")
      }
    },

    createPost: async (
      parent: never,
      args: { post: PostInput },
      { req, res }: Ctx,
      info: never,
    ) => {
      try {
        const newPost = await new Post(args.post)

        if (!newPost) {
          throw new Error("something wrong happend")
        }
        await newPost.save()
        return newPost
      } catch (err) {
        res.status(500)
        console.error(err, "server error")
      }
    },
  },
}

export default resolvers

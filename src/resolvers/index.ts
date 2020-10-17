import { Ctx, UserInput } from "../types"
import User from "../models/User"

const resolvers = {
  Query: {
    getUsers: async (parent: any, args: any, { req, res }: Ctx, info: any) => {
      try {
        const users = await User.find({})

        return users
      } catch (err) {
        res.status(500)
        console.error("server error")
      }
    },
  },

  Mutation: {
    createUser: async (
      parent: any,
      args: { user: UserInput },
      { req, res }: Ctx,
      info: any,
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
        console.error("server error")
      }
    },
  },
}

export default resolvers

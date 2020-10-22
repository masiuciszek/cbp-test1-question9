import { Ctx, UserInput } from "../types"
import { User } from "../models/User"
import tokenResponse from "./tokenResponse"

export const generateUserModel = ({ user }: User) => {
  return {
    createUser: async (
      _: never,
      args: { input: UserInput },
      { req, res }: Ctx,
    ) => {
      try {
        const User = user
        const newUser = await new User(args.input)
        if (!newUser) {
          throw new Error("something wrong happend")
        }

        await newUser.save()

        await tokenResponse(newUser, 201, true, res)

        return newUser
      } catch (err) {
        console.log(err.message)
      }
    },

    getUsers: async () => {
      const User = user
      const users = await User.find({})
      return users
    },
  }
}

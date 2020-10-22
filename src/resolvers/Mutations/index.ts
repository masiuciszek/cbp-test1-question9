import Post from "../../models/Post"
import User from "../../models/User"
import { Ctx, PostInput, UserInput, UserUpdateInput } from "../../types"
import tokenResponse from "../../utils/tokenResponse"

export const Mutations = {
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

      await tokenResponse(newUser, 201, true, res)

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
      firstName: args.input.firstName ? args.input.firstName : user?.firstName,
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
}

import * as dotenv from "dotenv"
import Post from "../../models/Post"
import User from "../../models/User"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import {
  Ctx,
  Input,
  LoginInput,
  PostInput,
  UserInput,
  UserUpdateInput,
} from "../../types"

import { createTokens } from "../../utils/createTokens"

dotenv.config()

export const Mutations = {
  createUser: async (
    _: never,
    args: { input: UserInput },
    { req, res }: Ctx,
  ) => {
    try {
      const newUser = await new User(args.input)

      await newUser.save()

      const tokens = createTokens(newUser)

      // res.cookie("refreshToken", tokens.refreshToken)
      // res.cookie("accessToken", tokens.accessToken)
      res.cookie("authToken", tokens.accessToken)

      return newUser
    } catch (err) {
      console.log(err.message)
      res.status(500).send("SERVER ERROR")
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

  login: async (_: never, { input }: Input<LoginInput>, { req, res }: Ctx) => {
    try {
      const { email, password } = input

      if (!email && !password) {
        throw new Error("Email and passord is required!")
      }

      const user = await User.findOne({ email })

      if (!user) {
        throw new Error(`No user with email ${email}`)
      }

      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) {
        throw new Error(`Auth error!!!`)
      }

      const tokens = createTokens(user)

      res.cookie("authToken", tokens.accessToken)

      return user
    } catch (err) {
      console.log(err)
    }
  },

  invalidateTokens: async (_: never, __: never, { req, res }: Ctx) => {
    if (!req.userId) {
      return false
    }

    const user = await User.findOne(req.userId)
    if (!user) {
      return false
    }
    user.count += 1
    await user.save()

    return true
  },

  createPost: async (
    _: never,
    args: { input: PostInput },
    { req, res }: Ctx,
  ) => {
    const newPost = await new Post({
      ...args.input,
      author: req.userId,
    })

    if (!newPost) {
      throw new Error("something wrong happend")
    }
    await newPost.save()
    return newPost
  },
}

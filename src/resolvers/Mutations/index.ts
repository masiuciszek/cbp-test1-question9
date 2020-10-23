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
import tokenResponse from "../../utils/tokenResponse"

dotenv.config()

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

      // await newUser.save()

      await tokenResponse(newUser, 201, true, res)

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
      const user = await User.findOne({ email })
      if (!user) {
        throw new Error(`No user founded`)
      }

      const isValid = await bcrypt.compare(password, user.password)
      if (!isValid) {
        throw new Error(`Auth error!!!`)
      }

      const accessToken = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET!,
        {
          expiresIn: "20min",
        },
      )

      const refreshToken = jwt.sign(
        { userId: user.id, count: user.count },
        process.env.JWT_SECRET!,
        {
          expiresIn: "7days",
        },
      )

      let date = new Date()
      const optionsRefreshToken = {
        expire: date.setHours(date.getDay() + 7),
        httpOnly: false,
        secure: false,
      }
      const optionsAccessToken = {
        expire: date.setHours(date.getMinutes() * 20),
        httpOnly: false,
        secure: false,
      }

      // Send cookie to the server
      res.cookie("refreshToken", refreshToken, optionsRefreshToken)
      res.cookie("accessToken", accessToken, optionsAccessToken)

      // await tokenResponse(
      //   user,
      //   200,
      //   true,
      //   res,
      //   date.setHours(date.getDay() + 7),
      // )

      return user
    } catch (err) {
      console.log(err)
    }
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

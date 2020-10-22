import { Response } from "express"
import { User } from "../models/User"

const tokenResponse = async (
  user: User,
  statusCode: number,
  success: boolean,
  res: Response,
) => {
  const token = await user.generateAuthToken()

  let date = new Date()

  const options = {
    expire: date.setHours(date.getHours() + 24),
    httpOnly: false,
    secure: false,
  }

  if (process.env.NODE_ENV === "production") {
    options.httpOnly = true
    options.secure = true
  }

  res
    .status(statusCode)
    .cookie("token", token, options)
    .json({ success, user, token })
}

export default tokenResponse

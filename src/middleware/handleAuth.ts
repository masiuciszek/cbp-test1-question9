import { NextFunction, Response } from "express"
import { verify } from "jsonwebtoken"
import { AuthRequest } from "../types"
import "dotenv/config"
import User from "../models/User"
import { createTokens } from "../utils/createTokens"

const handleAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const accessToken = req.cookies["accessToken"]
  const refreshToken = req.cookies["refreshToken"]
  if (!refreshToken && !accessToken) {
    return next()
  }
  try {
    const decoded = verify(accessToken, process.env.JWT_SECRET_ACCESS!) as any
    req.userId = decoded.userId
    return next()
  } catch (err) {
    console.log(err)
  }

  let decoded
  try {
    decoded = verify(refreshToken, process.env.JWT_SECRET_REFRESH!) as any
  } catch (err) {
    console.log(err)
    return next()
  }

  const user = await User.findById(decoded.userId)

  if (!user || user.count !== decoded.count) {
    return next()
  }
  const tokens = createTokens(user)

  res.cookie("refreshToken", tokens.refreshToken)
  res.cookie("accessToken", tokens.accessToken)
  req.userId = user._id

  next()
}

export default handleAuth

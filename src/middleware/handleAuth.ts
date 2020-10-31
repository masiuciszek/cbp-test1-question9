import { NextFunction, Response } from "express"
import { verify } from "jsonwebtoken"
import { AuthRequest } from "../types"
import "dotenv/config"
import User from "../models/User"

const handleAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) => {
  const authToken = req.cookies["authToken"]
  if (!authToken) {
    return next()
  }
  try {
    const { userId, exp } = verify(
      authToken,
      process.env.JWT_SECRET_ACCESS!,
    ) as any

    if (Date.now() >= exp * 1000) {
      return next()
    }
    const user = await User.findById(userId)
    if (!user) {
      return next()
    }
    req.userId = user._id
    next()
  } catch (error) {
    console.log(error.message)
  }
}

export default handleAuth

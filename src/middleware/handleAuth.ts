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

  const decoded = verify(authToken, process.env.JWT_SECRET_ACCESS!) as any

  const user = await User.findById(decoded.userId)
  if (!user) {
    return next()
  }
  req.userId = user._id

  next()
}

export default handleAuth

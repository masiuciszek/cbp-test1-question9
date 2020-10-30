import jwt from "jsonwebtoken"
import { User } from "../models/User"
import "dotenv/config"

export const createTokens = (user: User) => {
  const refreshToken = jwt.sign(
    { userId: user.id, count: user.count },
    process.env.JWT_SECRET_REFRESH!,
    { expiresIn: "7days" },
  )

  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET_ACCESS!,
    { expiresIn: "20min" },
  )

  const authToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET_ACCESS!,
    { expiresIn: "20min" },
  )

  return { refreshToken, accessToken, authToken }
}

import jwt from "jsonwebtoken"
import { User } from "../models/User"
import "dotenv/config"

export const createTokens = (user: User) => {
  const authToken = jwt.sign(
    { userId: user.id },
    process.env.JWT_SECRET_ACCESS!,
    { expiresIn: "7h" },
  )

  return { authToken }
}

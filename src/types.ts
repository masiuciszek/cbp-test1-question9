import { Request, Response } from "express"
import { User } from "./models/User"

export interface Ctx {
  req: Request
  res: Response
}

export interface AuthRequest extends Request {
  user: User
}

enum PostType {
  LOVE = "LOVE",
  NEWS = "NEWS",
  DRAMA = "DRAMA",
  TECH = "TECH",
  HISTORY = "HISTORY",
  SPORT = "SPORT",
  POLITICS = "POLITICS",
}

export interface UserInput {
  firstName: string
  lastName: string
  email: string
  password: string
  address: string
}

export interface LoginInput {
  email: string
  password: string
}

export type Input<T> = {
  [key: string]: T
}
// export type Input<T> = {
//   [key in keyof T]: T[key]
// }

export interface UserUpdateInput {
  firstName?: string
  lastName?: string
  email?: string
  address?: string
}
export interface PostInput {
  title: string
  desc: string
  type: PostType
  author: string // author ID
}
export interface ShoeInput {
  brand: ShoeType
  size: number
}

type ShoeType = "NEW_BALANCE" | "JORDAN" | "NIKE" | "ADIDAS" | "REEBOK"

export interface Shoe {
  brand: ShoeType
  size: number
  sport?: "football" | "basketball"
  season?: "summer" | "winter"
}

export interface Team {
  name: "LEGIA" | "IFK" | "MANU" | "LAKERS"
  year: number
  color?: string
  hasUltras?: boolean
}

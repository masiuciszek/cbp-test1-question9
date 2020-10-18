import { Request, Response } from "express"
import { User } from "./models/User"

export interface Ctx {
  req: Request
  res: Response
}

type PostType =
  | "love"
  | "news"
  | "drama"
  | "tech"
  | "history"
  | "sport"
  | "politics"

export interface UserInput {
  firstName: string
  lastName: string
  email: string
  address: string
}
export interface PostInput {
  title: string
  desc: string
  type: PostType
  author: User
}

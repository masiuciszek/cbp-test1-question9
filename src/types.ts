import { Request, Response } from "express"

export interface Ctx {
  req: Request
  res: Response
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
export interface UserUpdateInput {
  firstName?: string
  lastName?: string
  email?: string
  address?: string
}
export interface PostInput {
  title: string
  desc: string
  type: string
  author: string // author ID
}

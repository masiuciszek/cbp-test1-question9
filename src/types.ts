import { Request, Response } from "express"

export interface Ctx {
  req: Request
  res: Response
}

export interface UserInput {
  firstName: string
  lastName: string
  email: string
  address: string
}

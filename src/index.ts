import express from "express"
import { ApolloServer } from "apollo-server-express"
import cookieParser from "cookie-parser"
import typeDefs from "./typedefs"
import resolvers from "./resolvers"
import connectDb from "./db/connectDb"
import jwt from "jsonwebtoken"
import User from "./models/User"
import { AuthRequest } from "./types"
import "dotenv/config"
import { createTokens } from "./utils/createTokens"
;(async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
    playground: true,
    context: ({ req, res }) => {
      return { req, res }
    },
  })

  await connectDb()

  const app = express()

  app.use(cookieParser())

  app.use(async (req: AuthRequest, res, next) => {
    const refreshToken = req.cookies["refreshToken"]
    const accessToken = req.cookies["accessToken"]
    if (!refreshToken && !accessToken) {
      return next()
    }
    try {
      const decoded = jwt.verify(
        accessToken,
        process.env.JWT_SECRET_ACCESS!,
      ) as any
      req.userId = decoded.userId
      return next()
    } catch {}

    let decoded

    try {
      decoded = jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH!) as any
    } catch {
      return next()
    }

    const user = await User.findById(decoded.userId)
    if (!user || user.count !== decoded.count) {
      return next()
    }

    const tokens = createTokens(user)

    res.cookie("refreshToken", tokens.refreshToken)
    res.cookie("accessToken", tokens.accessToken)
    req.userId = user.id

    next()

    // try {
    //   let token
    //   let user
    //   let decoded
    //   if (req.cookies && req.cookies["access-token"]) {
    //     token = req.cookies["access-token"]
    //     decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    //     user = await User.findById(decoded.userId)
    //     if (!user) {
    //       throw new Error(`Auth error`)
    //     }
    //     console.log(decoded)
    //     console.log(token)
    //     req.user = decoded.userId
    //   }
    // } catch (err) {
    //   console.log(err)
    // }

    // next()
  })

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  )
})()

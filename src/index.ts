import express from "express"
import { ApolloServer } from "apollo-server-express"
import cookieParser from "cookie-parser"
import typeDefs from "./typedefs"
import resolvers from "./resolvers"
import connectDb from "./db/connectDb"
// import jwt from "jsonwebtoken"
// import User from "./models/User"
import { AuthRequest } from "./types"
import "dotenv/config"
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
    // console.log(refreshToken, accessToken)
    // console.log(req.cookies)
    // console.log(req.cookies)
    // const { refreshToken, accessToken } = req.cookies
    // if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    // }
    // let token
    // if (req.cookies) {
    //   const { accessToken } = req.cookies
    //   token = accessToken
    // }
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
    // const user = await User.findById(decoded.userId)
    // if (!user) {
    //   throw new Error(`Auth error`)
    // }
    // req.user = decoded.userId
    // next()
  })

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  )
})()

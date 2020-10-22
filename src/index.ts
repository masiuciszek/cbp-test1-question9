import express from "express"
import { ApolloServer } from "apollo-server-express"
import cookieParser from "cookie-parser"
import typeDefs from "./typedefs"
import resolvers from "./resolvers"
import connectDb from "./db/connectDb"
;(async () => {
  await connectDb()
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    tracing: true,
    playground: true,
    context: ({ req, res }) => {
      const token = req.headers.authorization || ""

      return { req, res, token }
    },
  })

  const app = express()
  server.applyMiddleware({ app })

  app.use(cookieParser())

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  )
})()

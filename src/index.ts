import express from "express"
import { ApolloServer } from "apollo-server-express"
import cookieParser from "cookie-parser"
import typeDefs from "./typedefs"
import resolvers from "./resolvers"
import connectDb from "./db/connectDb"
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

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  )
})()

import express from "express"
import { ApolloServer } from "apollo-server-express"
import cookieParser from "cookie-parser"
import typeDefs from "./typedefs"
import resolvers from "./resolvers"
import connectDb from "./db/connectDb"
import cors from "cors"
import "dotenv/config"
import handleAuth from "./middleware/handleAuth"
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
  const corsOptions = {
    origin: "http://localhost:3000", // client path
    credentials: true,
  }

  app.use(cors(corsOptions))

  app.use(cookieParser())
  app.use(handleAuth)

  server.applyMiddleware({ app })

  app.listen({ port: 4000 }, () =>
    console.log(
      `🚀 Server ready at http://localhost:4000${server.graphqlPath}`,
    ),
  )
})()

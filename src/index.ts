import { ApolloServer } from "apollo-server"
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
    context: ({ req, res }) => ({ req, res }),
  })

  server
    .listen(4000)
    .then(({ url }) => console.log(`server is on port ${url} 🚀`))
})()

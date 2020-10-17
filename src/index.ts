import { ApolloServer } from "apollo-server"
import typeDefs from "./typedefs"
import resolvers from "./resolvers"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context() {
    return
  },
})

server
  .listen(4000)
  .then(({ url }) => console.log(`server is on port ${url} 🚀`))

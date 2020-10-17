import { ApolloServer } from "apollo-server"
import typeDefs from "./typedefs"
import resolvers from "./resolvers"

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(4000).then(() => console.log(`server is on port 4000 🚀`))

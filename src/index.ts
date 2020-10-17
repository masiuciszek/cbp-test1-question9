import { ApolloServer } from "apollo-server"
import gql from "graphql-tag"

const typeDefs = gql`
  type User {
    email: String! #Not null
    name: String!
    friends: [User]! #array should not be null
  }

  type Query {
    me: User!
  }
`

const resolvers = {
  Query: {
    me() {
      return {
        email: "someemail@example.com",
        name: "Mike smith",
        friends: [],
      }
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen(4000).then(() => console.log(`server is on port 4000 🚀`))

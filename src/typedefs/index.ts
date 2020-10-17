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

export default typeDefs

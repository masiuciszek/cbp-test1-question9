import gql from "graphql-tag"

const typeDefs = gql`
  type User {
    email: String! #Not null
    name: String!
  }

  type Color {
    name: String!
    cool: Boolean!
  }

  type Query {
    me: User!
    color: Color!
  }
`

export default typeDefs

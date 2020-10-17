import gql from "graphql-tag"

const typeDefs = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    address: String!
  }

  type User {
    id: ID
    firstName: String
    lastName: String
    email: String
    address: String
    createdAt: String
  }

  type Pet {
    id: ID!
    createdAt: String!
    name: String!
    cool: Boolean!
    type: String!
  }

  type Query {
    getUsers: [User]!
  }

  type Mutation {
    createUser(user: UserInput): [User]
  }
`

export default typeDefs

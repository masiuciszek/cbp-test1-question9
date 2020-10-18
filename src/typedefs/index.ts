import gql from "graphql-tag"

const typeDefs = gql`
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    address: String!
  }

  input PostInput {
    title: String!
    desc: String!
    type: String!
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String
    address: String
    createdAt: String
  }

  type Post {
    id: ID!
    title: String!
    desc: String!
    type: String!
    author: User!
    createdAt: String!
  }

  type Query {
    getUsers: [User]!
    getPosts: [Post]!
  }

  type Mutation {
    createUser(input: UserInput): User
    createPost(input: PostInput): Post
  }
`

export default typeDefs

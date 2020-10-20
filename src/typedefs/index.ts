import gql from "graphql-tag"

const typeDefs = gql`
  enum PostType {
    LOVE
    NEWS
    DRAMA
    TECH
    HISTORY
    SPORT
    POLITICS
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    address: String!
  }

  input UserUpdateInput {
    firstName: String
    lastName: String
    email: String
    address: String
  }

  input PostInput {
    title: String!
    desc: String!
    type: PostType!
    author: String! # user ID
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    address: String
    password: String!
    createdAt: String!
  }

  type Post {
    id: ID!
    title: String!
    desc: String!
    type: PostType!
    author: User!
    createdAt: String!
  }

  type UserResponse {
    user: User!
    token: String!
  }

  type Query {
    getUsers: [User]!
    getUserById(id: String!): User!
    getPosts: [Post]!
  }

  type Mutation {
    createUser(input: UserInput): User
    updateUser(id: String!, input: UserUpdateInput): User!
    createPost(input: PostInput): Post
  }
`

export default typeDefs

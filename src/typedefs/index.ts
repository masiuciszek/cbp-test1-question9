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

  enum ShoeType {
    NEW_BALANCE
    JORDAN
    NIKE
    ADIDAS
    REEBOK
  }

  interface Shoe {
    brand: ShoeType!
    size: Int!
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

  input ShoeInput {
    brand: ShoeType
    size: Int
  }
  input NewShoeInput {
    brand: ShoeType
    size: Int
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

  type Sneaker implements Shoe {
    brand: ShoeType!
    size: Int!
    sport: String
  }

  type RunningShoe implements Shoe {
    brand: ShoeType!
    size: Int!
    season: String
  }

  type UserResponse {
    user: User!
    token: String!
  }

  type Query {
    getUsers: [User]!
    getUserById(id: String!): User!
    getPosts: [Post]!
    shoes(input: ShoeInput): [Shoe]!
  }

  type Mutation {
    createUser(input: UserInput): User!
    updateUser(id: String!, input: UserUpdateInput): User!
    createPost(input: PostInput): Post!
    newShoe(input: NewShoeInput!): Shoe!
  }
`

export default typeDefs

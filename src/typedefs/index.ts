import gql from "graphql-tag"

const typeDefs = gql`
  union SportSociety = FootballTeam | BasketballTeam

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

  enum TeamType {
    LEGIA
    IFK
    MANU
    LAKERS
  }

  interface Shoe {
    brand: ShoeType!
    size: Int!
  }

  interface Team {
    name: TeamType!
    year: Int!
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

  input LoginInput {
    email: String!
    password: String!
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
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    address: String
    password: String!
    createdAt: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    desc: String!
    type: PostType!
    author: User
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

  type FootballTeam implements Team {
    name: TeamType!
    year: Int!
    hasUltras: Boolean
  }
  type BasketballTeam implements Team {
    name: TeamType!
    year: Int!
    color: String
  }

  type Query {
    getUsers: [User]!
    getMe(id: String!): User
    me: User
    getUserById(id: String!): User!
    getPosts: [Post]!
    shoes(input: ShoeInput): [Shoe]!
    teams: [Team]
  }

  type Mutation {
    createUser(input: UserInput): User!
    updateUser(id: String!, input: UserUpdateInput): User!
    login(input: LoginInput!): User
    invalidateTokens: Boolean!
    createPost(input: PostInput): Post
    newShoe(input: NewShoeInput!): Shoe!
  }
`

export default typeDefs

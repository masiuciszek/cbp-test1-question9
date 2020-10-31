import { gql } from "@apollo/client"

export const USERS_QUERY = gql`
  {
    users: getUsers {
      id
      firstName
      lastName
      email
      address
    }
  }
`

export const ME_QUERY = gql`
  {
    me {
      firstName
      lastName
      email
      posts {
        type
        title
      }
    }
  }
`
export const POSTS_QUERY = gql`
  {
    posts: getPosts {
      id
      title
      desc
      type
      author {
        firstName
        lastName
      }
    }
  }
`

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

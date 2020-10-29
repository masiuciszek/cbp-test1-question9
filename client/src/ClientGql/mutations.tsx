import { gql } from "@apollo/client"

export const LOGIN_MUTATION = gql`
  mutation login($input: LoginInput!) {
    login(input: $input) {
      id
      firstName
      lastName
      email
      address
    }
  }
`

export const REGISTER_QUERY = gql`
  mutation register($input: UserInput!) {
    createUser(input: $input) {
      id
      firstName
      lastName
      email
      address
    }
  }
`

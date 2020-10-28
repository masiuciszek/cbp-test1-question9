import { gql } from "@apollo/client"

// mutation CreateReviewForEpisode($episode: Episode!, $review: ReviewInput!) {
//   createReview(episode: $episode, review: $review) {
//     stars
//     commentary
//   }
// }
export const LOGIN_MUTATION = gql`
  mutation LoginUser($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      lastName
      firstName
      email
    }
  }
`

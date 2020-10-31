import { useQuery } from "@apollo/client"
import React from "react"
import { Link } from "react-router-dom"
import { POSTS_QUERY } from "../../ClientGql/index"
import { styled } from "../Layout"
import PostItem from "./PostItem"

interface PostsProps {}
interface PostsQuery {
  posts: Array<Post>
}

const PostsStyled = styled("section")`
  #new-post {
    text-decoration: none;
    color: ${props => props.theme.colors.main};
    font-size: 2em;
    background: ${props => props.theme.colors.positive};
    padding: 0.3em;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.4);
    display: block;
    margin: 1rem auto;
    width: 9em;
    text-align: center;
  }
`

const Posts: React.FC<PostsProps> = () => {
  const { loading, error, data } = useQuery<PostsQuery>(POSTS_QUERY)
  if (loading) return <p>...loading</p>
  if (error) return <p>oops there is an error</p>

  return (
    <PostsStyled>
      <Link to="/add-post" id="new-post">
        Add a new Post
      </Link>
      {data?.posts.map(post => (
        <PostItem key={post.id} post={post} />
      ))}
    </PostsStyled>
  )
}
export default Posts

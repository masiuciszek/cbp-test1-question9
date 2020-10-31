import React from "react"
import { styled } from "../Layout"

interface PostItemProps {
  post: Post
}

const StyledPostItem = styled("div")`
  padding: 1em;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  max-width: 700px;
  margin: 0.4em auto;
  p {
    margin: 0.4em 0;
    font-size: 1.6em;
    span {
      background: ${props => props.theme.colors.highlight};
      color: ${props => props.theme.colors.main};
      padding: 0.4em;
      border-radius: ${props => props.theme.borderRadius};
      box-shadow: 2px 2px 3px 2px rgba(0, 0, 0, 0.4);
    }
  }
`

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <StyledPostItem>
      <p>
        Title: <span>{post.title}</span>
      </p>
      <p>
        Type: <span>{post.type}</span>
      </p>
      <p>
        Author:{" "}
        <span>
          {post.author.firstName} {post.author.lastName}
        </span>{" "}
      </p>
    </StyledPostItem>
  )
}
export default PostItem

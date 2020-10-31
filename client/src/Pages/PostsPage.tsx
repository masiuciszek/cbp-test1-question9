import React from "react"
import Title from "../Components/Elements/Title"
import Posts from "../Components/posts/Posts"
import { Page, Wrapper } from "../Components/Styled"

const extraStyles = {
  "text-align": "center",
  "border-bottom": "2px solid #333",
}

const PostsPage = () => {
  return (
    <Page>
      <Wrapper>
        <Title title="Posts" extraStyles={extraStyles} />
        <Posts />
      </Wrapper>
    </Page>
  )
}
export default PostsPage

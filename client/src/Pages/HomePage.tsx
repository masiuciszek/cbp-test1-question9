import React from "react"
import Title from "../Components/Elements/Title"
import { Page, Wrapper } from "../Components/Styled"
import { Users } from "../Components/users"

const extraStyles = {
  "text-align": "center",
}

const HomePage = () => {
  return (
    <Page>
      <Wrapper>
        <Title title="All Registered Users" extraStyles={extraStyles} />
        <Users />
      </Wrapper>
    </Page>
  )
}

export default HomePage

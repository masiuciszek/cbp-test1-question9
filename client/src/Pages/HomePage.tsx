import React from "react"
import Title from "../Components/Elements/Title"
import { Page, Wrapper } from "../Components/Styled"
import { Users } from "../Components/users"

interface HomePageProps {}

const extraStyles = {
  "text-align": "center",
}

const HomePage: React.FC<HomePageProps> = ({}) => {
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

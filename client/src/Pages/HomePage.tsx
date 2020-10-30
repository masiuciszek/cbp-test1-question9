import { useQuery } from "@apollo/client"
import Cookies from "js-cookie"
import React from "react"
import { ME_QUERY } from "../ClientGql/queries"
import Title from "../Components/Elements/Title"
import { Page, Wrapper } from "../Components/Styled"
import { Users } from "../Components/users"

const extraStyles = {
  "text-align": "center",
}

const HomePage = () => {
  // const { loading, error, data } = useQuery<GetMeQuery>(ME_QUERY)
  // if (loading) return <p>...loading</p>

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

import React from "react"
import Form from "../Components/Elements/Form"
import Title from "../Components/Elements/Title"
import { Page, Wrapper } from "../Components/Styled"

interface LoginPageProps {}

const extraStyles = {
  "text-align": "center",
  "border-bottom": "2px solid #333",
}
const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <Page>
      <Wrapper>
        <Title title="Login" extraStyles={extraStyles} />
        <Form className="Login-form" />
      </Wrapper>
    </Page>
  )
}
export default LoginPage

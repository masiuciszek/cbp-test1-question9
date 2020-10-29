import React from "react"
import RegisterForm from "../Components/Elements/RegisterForm"
import Title from "../Components/Elements/Title"
import { Page, Wrapper } from "../Components/Styled"

const extraStyles = {
  "text-align": "center",
  "border-bottom": "2px solid #333",
}

const RegisterPage = () => {
  return (
    <Page>
      <Wrapper>
        <Title title="Register" extraStyles={extraStyles} />
        <RegisterForm className="Register-form" />
      </Wrapper>
    </Page>
  )
}
export default RegisterPage

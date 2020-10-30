import { useMutation } from "@apollo/client"
import Cookies from "js-cookie"
import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { LOGIN_MUTATION } from "../../ClientGql/mutations"

import {
  Button,
  FormGroup,
  FormStyled,
  FormWrapper,
  Input,
  Label,
} from "../Styled/FormElements"

interface FormProps {
  className?: string
}

const LoginForm: React.FC<FormProps> = ({ className = "main-form" }) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isAuth, setIsAuth] = useState(false)
  const routerHistory = useHistory()
  const [loginUserFn, logedInUser] = useMutation<UserMutationData>(
    LOGIN_MUTATION,
  )

  React.useEffect(() => {
    let token
    if (Cookies.get("authToken")) {
      token = Cookies.get("authToken")
      setIsAuth(true)
    }
    if (isAuth) {
      routerHistory.push("/")
    }
  }, [isAuth, routerHistory])

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()
    loginUserFn({ variables: { input: { email, password } } })
    // loginUserFn({ variables: { email, password } })
    console.log(logedInUser)
  }

  if (logedInUser.error) {
    return <h3> Ooppps we got a error! </h3>
  }
  if (logedInUser.loading) {
    return <h3>Loading...</h3>
  }

  return (
    <FormWrapper>
      <FormStyled className={className} onSubmit={handleSubmit}>
        <FormGroup>
          <Label>
            <span>email</span>
          </Label>
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>password</span>
          </Label>
          <Input
            type="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>
      </FormStyled>
    </FormWrapper>
  )
}
export default LoginForm

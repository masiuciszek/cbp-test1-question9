import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { REGISTER_QUERY } from "../../ClientGql/mutations"
import Cookies from "js-cookie"
import {
  Button,
  FormGroup,
  FormStyled,
  FormWrapper,
  Input,
  Label,
} from "../Styled/FormElements"
import { useHistory } from "react-router-dom"

interface RegisterFormProps {
  className?: string
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  className = "register-form",
}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
  })
  const routerHistory = useHistory()
  const [isAuth, setIsAuth] = useState(false)

  let token = Cookies.get("authToken")
  React.useEffect(() => {
    if (isAuth) {
      routerHistory.push("/")
    }
  }, [isAuth, routerHistory])

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const [registerFn, newUser] = useMutation<UserMutationData>(REGISTER_QUERY)

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>): void => {
    evt.preventDefault()

    registerFn({ variables: { input: formData } })
  }

  if (newUser.error) {
    return <h3> Ooppps we got a error! </h3>
  }
  if (newUser.loading) {
    return <h3>Loading...</h3>
  }

  return (
    <FormWrapper>
      <FormStyled onSubmit={handleSubmit} className={className}>
        <FormGroup>
          <Label>
            <span>firstName</span>
          </Label>
          <Input
            type="text"
            placeholder="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>lastName</span>
          </Label>
          <Input
            type="text"
            placeholder="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>email</span>
          </Label>
          <Input
            type="email"
            placeholder="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>address</span>
          </Label>
          <Input
            type="text"
            placeholder="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Button type="submit">Register</Button>
        </FormGroup>
      </FormStyled>
    </FormWrapper>
  )
}
export default RegisterForm

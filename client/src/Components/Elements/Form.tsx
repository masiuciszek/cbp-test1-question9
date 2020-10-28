import React from "react"
import { styled } from "../Layout"
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

interface FormGroupWrapperProps {
  name: string
  value: string | boolean
  onChange: () => void
}

const FormContext = React.createContext<FormGroupWrapperProps | undefined>(
  undefined,
)
// TODO: For later!!!
const FormGroupWrapper: React.FC<FormGroupWrapperProps> = ({
  children,
  name,
  value,
  onChange,
}) => {
  return (
    <FormContext.Provider value={{ name, value, onChange }}>
      {children}
    </FormContext.Provider>
  )
}

const Form: React.FC<FormProps> = ({ className = "main-form" }) => {
  return (
    <FormWrapper>
      <FormStyled className={className}>
        <FormGroup>
          <Label>
            <span>firstName</span>
          </Label>
          <Input type="text" placeholder="firstName" name="firstName" />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>lastName</span>
          </Label>
          <Input type="text" placeholder="lastName" name="lastName" />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>email</span>
          </Label>
          <Input type="email" placeholder="email" name="email" />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>address</span>
          </Label>
          <Input type="text" placeholder="address" name="address" />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>password</span>
          </Label>
          <Input type="password" placeholder="password" name="password" />
        </FormGroup>

        <FormGroup>
          <Label>
            <span>repeat password </span>
          </Label>
          <Input
            type="password"
            placeholder="repeat password"
            name="password2"
          />
        </FormGroup>
        <FormGroup>
          <Button type="submit">Login</Button>
        </FormGroup>
      </FormStyled>
    </FormWrapper>
  )
}
export default styled(Form)``

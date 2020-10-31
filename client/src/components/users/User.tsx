import React from "react"
import { styled } from "../Layout"

interface UserProps {
  user: User
}

const randomNum = () => Math.floor(Math.random() * 120)

const StyledUser = styled("div")`
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  p {
    font-size: 3em;
    span {
      margin-left: 0.5em;
      background: ${({ theme }) => theme.colors.highlight};
      padding: 0.5em;
      border-radius: 4px;
      box-shadow: ${({ theme }) => theme.shadows.elevations[3]};
      border: 2px solid ${({ theme }) => theme.colors.positive};
      color: ${({ theme }) => theme.colors.main};
      transform: rotate(2deg);

      display: inline-block;
    }
  }
`

const User: React.FC<UserProps> = ({
  user: { firstName, lastName, email, address },
}) => {
  return (
    <StyledUser>
      <p>
        Name
        <span>
          {firstName} {lastName}
        </span>
      </p>
      <p>
        Email
        <span>{email}</span>
      </p>

      <p>
        Address
        <span> {address} </span>
      </p>
    </StyledUser>
  )
}
export default User

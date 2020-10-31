import React from "react"
import { Link } from "react-router-dom"
import styled from "./styled"

interface NavProps {}
const NavBar = styled("nav")`
  /* position: fixed; */
  /* top: 0;
  left: 0; */
  padding: 1em;
  display: flex;
  background: ${props => props.theme.colors.primary};
`

const NavList = styled("ul")`
  display: flex;
  list-style: none;
  margin: 0 auto;
  width: 90%;
  justify-content: center;
  padding: 1rem;
  li {
    padding: 1em;
    a {
      text-decoration: none;
      font-size: 1.2em;
      color: ${props => props.theme.colors.main};
      text-shadow: 1px 2px 3px ${props => props.theme.colors.positive};
    }
  }
`
const Nav: React.FC<NavProps> = ({}) => {
  return (
    <NavBar>
      <NavList>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </NavList>
    </NavBar>
  )
}
export default Nav

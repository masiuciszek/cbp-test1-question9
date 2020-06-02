import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from './image/logo.svg';
import NavList from './NavList';
interface Props {}

const StyledNav = styled.nav`
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
  display: flex;
`;

const NavTitle = styled.div`
  width: 20rem;
  display: flex;
  justify-content: center;

  svg {
    width: 90px;
    color: #fff;
    transform: rotate(40deg);
    path {
      fill: white;
    }
  }
`;

const NavBar: React.FC<Props> = () => {
  return (
    <StyledNav>
      <NavTitle>
        <Logo />
      </NavTitle>
      <NavList />
    </StyledNav>
  );
};
export default NavBar;

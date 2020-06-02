import * as React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from './image/logo.svg';
import NavList from './NavList';
import { above } from '../utils/media';
import useToggle from '../../hooks/useToggle';
import BelowList from './BelowList';

interface Props {}

const StyledNav = styled.nav`
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  position: relative;
  #icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    cursor: pointer;
    z-index: 2;
  }
  @media ${above.tablet} {
    #icon {
      display: none;
    }
  }
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
  const [on, toggle] = useToggle();
  return (
    <StyledNav>
      <div id="icon" onClick={toggle}>
        Menu
      </div>
      <NavTitle>
        <Logo />
      </NavTitle>
      <NavList />

      <BelowList on={on} />
    </StyledNav>
  );
};
export default NavBar;

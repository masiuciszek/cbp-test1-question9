import * as React from 'react';
import styled from 'styled-components';
import { device } from '../utils/media';

interface Props {}

const StyledNavList = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  li {
    padding: 1em;
    transition: ${(props) => props.theme.transition.quickTransition};
  }
  span {
    font-size: 1.6rem;
    text-transform: capitalize;
    transition: ${(props) => props.theme.transition.quickTransition};
    padding: 0.5em;
    &:hover {
      color: ${({ theme }) => theme.colors.dark};
      background: ${({ theme }) => theme.colors.white};
      position: relative;
      z-index: 1;
      padding: 0.6em;
      &:after {
        content: '';
        background: rgba(44, 33, 61, 0.8);
        width: 100%;
        height: 4px;
        padding: 0.3em;
        position: absolute;
        left: 0;
        bottom: -2px;
        /* translate(-50%, -50%); */
      }
    }
    &:after {
      transition: ${(props) => props.theme.transition.quickTransition};
    }
  }
  @media${device.desktop}{
    background:red;
  }
`;

const NavList: React.FC<Props> = () => {
  const [navData, setNavData] = React.useState<ListData[]>([
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'faq',
      path: '/faq',
    },
  ]);
  return (
    <StyledNavList>
      {navData.map(({ name, path }) => {
        return (
          <li key={name}>
            <span>{name}</span>
          </li>
        );
      })}
    </StyledNavList>
  );
};
export default NavList;

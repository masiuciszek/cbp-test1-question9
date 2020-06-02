/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { above } from '../utils/media';
import { Link } from 'react-router-dom';

interface Props {
  on: boolean;
}

interface ColProps {
  left?: boolean;
}
const Column = styled(animated.div)<ColProps>`
  height: 100vh;
  background: ${({ left, theme }) =>
    left ? theme.colors.primaryShadow : theme.colors.secondaryShadow};
  width: ${({ left }) => (left ? '40%' : '60%')};
  position: absolute;
  left: ${({ left }) => left && 0};
  right: ${({ left }) => !left && 0};
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${above.tablet} {
    display: none;
  }
`;

const List = styled.ul`
  width: 70%;
  li {
    padding: 0.5rem;
  }
  a {
    font-size: 2.5rem;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.white};
    display: block;
    padding: 0.5em 0;
    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.white};
    }
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  h3 {
    font-size: 1.8em;
    width: 100%;
    text-align: center;
  }
  p {
    font-size: 19px;
  }
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
  }
`;

const BelowList: React.FC<Props> = ({ on }) => {
  const [listData, setListData] = React.useState<ListData[]>([
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
    {
      name: 'contact',
      path: '/contact',
    },
  ]);

  const { x, opacity, zIndex } = useSpring({
    x: on ? 0 : 100,
    opacity: on ? 1 : 0,
    zIndex: on ? 1 : 0,
  });

  return (
    <>
      <Column
        left
        style={{
          transform: x.interpolate((x) => `translate3d(${x * -1}%,0,0)`),
          opacity,
          zIndex,
        }}
      >
        <LeftContent>
          <h3>Application </h3>
          <p>By Marcell Ciszek</p>
          <a
            href="https://www.marcellable.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            blog
          </a>
          <a
            href="https://masiuciszek.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            website
          </a>
        </LeftContent>
      </Column>
      <Column
        style={{
          transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
          opacity,
          zIndex,
        }}
      >
        <List>
          {listData.map(({ name, path }) => (
            <li key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </List>
      </Column>
    </>
  );
};
export default BelowList;

/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import instagram from './image/insta.png';
import github from './image/github.png';
import linkedin from './image/link.png';
import { below, above } from '../utils/media';
import { Link } from 'react-router-dom';

interface Props {}

const ListWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  width: 70%;

  @media ${below.tablet} {
    margin: 0 auto;
    width: 100%;
  }
  /* @media (max-width: 660px) {
    margin: 0 auto;
    width: 100%;
  } */
`;

const ListStyles = styled.ul`
  display: flex;
  justify-content: flex-end;
  li {
    padding: 0.5em;
    transition: ${(props) => props.theme.transition.quickTransition};
  }

  a,
  img {
    font-size: 1.6rem;
    text-transform: capitalize;
    transition: ${(props) => props.theme.transition.quickTransition};
    padding: 0.5em;
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      color: ${({ theme }) => theme.colors.dark};
      background: ${({ theme }) => theme.colors.white};
    }
  }
  img {
    width: 5rem;
  }
  @media ${below.tablet} {
    justify-content: center;
  }
  /* @media (max-width: 660px) {
    justify-content: center;
  } */
`;

const List: React.FC<Props> = () => {
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
  const [socialData, setSocialData] = React.useState<SocialData[]>([
    {
      name: 'github',
      path: '/',
      icon: github,
    },
    {
      name: 'linkedin',
      path: '/about',
      icon: linkedin,
    },
    {
      name: 'instagram',
      path: '/faq',
      icon: instagram,
    },
  ]);

  return (
    <ListWrapper>
      <ListStyles>
        {listData.map((listItem) => (
          <li key={listItem.name}>
            <Link to={listItem.path}>{listItem.name}</Link>
          </li>
        ))}
      </ListStyles>

      <ListStyles>
        {socialData.map((listItem) => (
          <li key={listItem.name}>
            <img src={listItem.icon} />
          </li>
        ))}
      </ListStyles>
    </ListWrapper>
  );
};
export default List;

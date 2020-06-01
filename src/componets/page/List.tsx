import * as React from 'react';
import styled from 'styled-components';
interface Props {}

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: auto;

  width: 70%;
  @media (max-width: 760px) {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 660px) {
    margin: 0 auto;
    width: 90%;
  }
`;

const ListStyles = styled.ul`
  display: flex;

  li {
    padding: 0.5em;
  }

  span {
    font-size: 1.5rem;
    text-transform: capitalize;
  }
  @media (min-width: 760px) {
    border: 2px solid red;
    justify-content: flex-end;
  }
  @media (max-width: 760px) {
    /* justify-content: flex-end; */
  }
  @media (max-width: 660px) {
    margin: 0 auto;
  }
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
  ]);
  const [socialData, setSocialData] = React.useState<SocialData[]>([
    {
      name: 'github',
      path: '/',
      icon: '',
    },
    {
      name: 'linkedin',
      path: '/about',
      icon: '',
    },
    {
      name: 'facebook',
      path: '/faq',
      icon: '',
    },
  ]);

  return (
    <ListWrapper>
      <ListStyles>
        {listData.map((listItem) => (
          <li key={listItem.name}>
            <span>{listItem.name}</span>
          </li>
        ))}
      </ListStyles>
      <ListStyles>
        {socialData.map((listItem) => (
          <li key={listItem.name}>
            <span>{listItem.name}</span>
          </li>
        ))}
      </ListStyles>
    </ListWrapper>
  );
};
export default List;

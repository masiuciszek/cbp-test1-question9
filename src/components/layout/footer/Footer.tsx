/* eslint-disable quotes */
import * as React from 'react';
import styled from 'styled-components';
import { flexStyles } from '@/components/styled/styled_utils/helpers';
import { below } from '@/components/styled/styled_utils/media';
import { NavTitle } from '../navbar/Nav';
import FooterList from './FooterList';

interface Props {
  className: string;
}

const FooterTitle = styled(NavTitle)`
  font-size: 1.5em;
  ${below.medium`
    text-align: center;
    font-size: 1.8em;
    width: 100%;
    display: block;

    span{
      text-align: center;
    }
   `}

  span {
    margin: 1rem 0;
    display: block;
    font-size: 1.8rem;
    font-weight: 400;
    font-family: 'Caveat', cursive;
  }
`;

const Footer: React.FC<Props> = ({ className }) => {
  const [navData, setNavData] = React.useState<NavData[]>([
    {
      name: `home`,
      path: `/`,
    },
    {
      name: `about`,
      path: `/about`,
    },
    {
      name: `blog`,
      path: `/blog`,
    },
    {
      name: `contact`,
      path: `/contact`,
    },
  ]);

  const date = new Date();
  return (
    <footer className={className}>
      <FooterTitle>
        Marcell Ciszek {date.getFullYear()}
        <span>Web dev from Gothenburg λ </span>
      </FooterTitle>
      <FooterList navData={navData} />
    </footer>
  );
};

export default styled(Footer)`
  padding: 1.5em 0.5em;
  background: ${({ theme }) => theme.colors.primary};
  ${flexStyles(`flex`, `space-between`, `center`)};
  ${below.medium`
    ${flexStyles(`column`, `center`, `center`)}
   `}
`;

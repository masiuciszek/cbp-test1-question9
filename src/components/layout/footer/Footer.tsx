import * as React from 'react';
import styled from 'styled-components';
import { NavTitle } from '../navbar/Nav';

interface Props {
  className: string;
}

const FooterTitle = styled(NavTitle)``;

const Footer: React.FC<Props> = ({ className }) => {
  const date = new Date();
  return (
    <footer className={className}>
      <FooterTitle>
        Footer {date.getFullYear()}/{date.getMonth()}/{date.getUTCDay()}
      </FooterTitle>
    </footer>
  );
};

export default styled(Footer)`
  padding: 1.5em 0.5em;
  background: ${({ theme }) => theme.colors.primary};
`;

/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import List from './List';
import { below } from '../utils/media';

interface Props {
  title?: string;
}

const FooterStyles = styled.footer`
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  @media ${below.tablet} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 2em;
`;

const Footer: React.FC<Props> = ({ title = 'Styled components' }) => {
  return (
    <FooterStyles>
      <FooterTitle>{title}</FooterTitle>
      <List />
    </FooterStyles>
  );
};

export default Footer;

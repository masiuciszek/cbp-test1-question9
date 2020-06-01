/* eslint-disable react/prop-types */
import * as React from 'react';
import styled from 'styled-components';
import List from './List';

interface Props {
  title?: string;
}

const FooterStyles = styled.footer`
  padding: 1rem 1.5rem;
  background: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  @media (max-width: 660px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterTitle = styled.h3`
  font-size: 3rem;
  padding: 0.6em;
`;

const Footer: React.FC<Props> = ({ title = "Styled component's" }) => {
  return (
    <FooterStyles>
      <FooterTitle>{title}</FooterTitle>
      <List />
    </FooterStyles>
  );
};

export default Footer;

/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import { flexStyles } from '../styled_utils/helpers';
import { CtaLink } from './Buttons';

interface Props {
  text: string;
  cta?: boolean;
  desc?: string;
  padding?: boolean;
}

interface StyledProps {
  color?: string;
  bg?: string;
  padding?: boolean;
}

const StyledTitle = styled.div<StyledProps>`
  ${flexStyles(`column`, `center`, `center`)};
  background: ${(props) => (props.bg ? props.bg : `rgba(0,0,0,0.5)`)};
  padding: ${(props) => (props.padding ? `3rem 12rem` : `2rem 4rem`)};
  h3,
  p {
    color: ${(props) => (props.color ? props.color : `#fff`)};
  }
  h3 {
    font-size: 3em;
  }
  p {
    font-size: 1.8rem;
  }
`;

const Title: React.FC<Props> = ({ text, desc, cta, padding }) => (
  <StyledTitle padding={padding}>
    <h3>{text}</h3>
    {desc && <p>{desc}</p>}
    {cta && <CtaLink to="/blog">Blog</CtaLink>}
  </StyledTitle>
);

export default Title;

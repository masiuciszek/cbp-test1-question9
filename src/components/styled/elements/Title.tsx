/* eslint-disable quotes */
import React from 'react';
import styled from 'styled-components';
import { flexStyles } from '../styled_utils/helpers';

interface Props {
  text: string;
  desc?: string;
}

interface StyledProps {
  color?: string;
  bg?: string;
}

const StyledTitle = styled.div<StyledProps>`
  ${flexStyles(`column`, `center`, `center`)};
  background: ${(props) => (props.bg ? props.bg : `rgba(0,0,0,0.5)`)};
  padding: 1rem 4rem;
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

const Title: React.FC<Props> = ({ text, desc }) => (
  <StyledTitle>
    <h3>{text}</h3>
    {desc && <p>{desc}</p>}
  </StyledTitle>
);

export default Title;

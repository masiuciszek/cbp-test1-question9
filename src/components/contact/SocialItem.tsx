/* eslint-disable quotes */
import * as React from 'react';
import { IFixedObject } from 'gatsby-background-image';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { flexStyles } from '../styled/styled_utils/helpers';

interface Props {
  data: {
    childImageSharp: {
      fixed: IFixedObject;
    };
    name: string;
  };
}

const StyledSocialItem = styled.div`
  border: 2px solid red;
  max-width: 35rem;
  ${flexStyles(`flex`, `center`, `center`)};
  h3 {
    font-size: 3rem;
    font-family: 'Caveat', cursive;
  }
`;

const SocialItem: React.FC<Props> = ({ data }) => {
  const { name } = data;
  const { childImageSharp } = data;
  return (
    <StyledSocialItem>
      <h3> {name} </h3> <Img fixed={childImageSharp.fixed} />
    </StyledSocialItem>
  );
};
export default SocialItem;

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
  max-width: 35rem;
  ${flexStyles(`flex`, `center`, `center`)};
  margin: 0.5rem auto;
  ${(props) => props.theme.shadows.elevations[1]};
  transform: ${(props) => props.theme.transition.quickTransition};
  a {
    font-size: 3rem;
    font-family: 'Caveat', cursive;
    display: block;
    color: ${(props) => props.theme.colors.primary};
    margin: 0 1.5rem;
    flex-basis: 80%;
    flex: 1;
  }
  .gatsby-image-wrapper {
    height: 5rem !important;
    width: 5rem !important;
  }

  &:hover {
    ${(props) => props.theme.shadows.elevations[2]};
    background: ${(props) => props.theme.colors.secondaryShadow};
    a {
      color: ${(props) => props.theme.colors.white};
    }
  }
`;

const SocialItem: React.FC<Props> = ({ data }) => {
  const { name } = data;
  const { childImageSharp } = data;
  return (
    <StyledSocialItem>
      <a
        href={`https://${name}${
          name !== `masiuciszek` ? `.com/masiuciszek` : `.com`
        } `}
        target="_blank"
        rel="noreferrer"
      >
        {` `}
        {name}
        {` `}
      </a>
      {` `}
      <Img fixed={childImageSharp.fixed} />
    </StyledSocialItem>
  );
};
export default SocialItem;

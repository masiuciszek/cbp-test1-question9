import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { IFixedObject } from 'gatsby-background-image';
import styled from 'styled-components';
import SocialItem from './SocialItem';
import { below } from '../styled/styled_utils/media';

interface Props {}

type Node = {
  node: {
    childImageSharp: {
      fixed: IFixedObject;
    };
    name: string;
  };
};
interface SocialQuery {
  socialImages: {
    edges: Array<Node>;
  };
}

const SocialBoxStyles = styled.div`
  flex: 1;
  ${below.medium`
      width: 100%;
  `}
`;

const SocialBox: React.FC<Props> = () => {
  const {
    socialImages: { edges },
  } = useStaticQuery<SocialQuery>(
    graphql`
      {
        socialImages: allFile(filter: { extension: { eq: "png" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 125, height: 125) {
                  ...GatsbyImageSharpFixed
                }
              }
              name
            }
          }
        }
      }
    `,
  );

  return (
    <SocialBoxStyles>
      {edges.map(({ node }) => (
        <SocialItem key={node.name} data={node} />
      ))}
    </SocialBoxStyles>
  );
};
export default SocialBox;

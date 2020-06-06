/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import styled from 'styled-components';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { flexStyles } from '@/components/styled/styled_utils/helpers';
import Img from 'gatsby-image';
import { IFixedObject } from 'gatsby-background-image';
import { below } from '@/components/styled/styled_utils/media';

interface Props {
  navData: NavData[];
}

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

const List = styled.div`
  width: 50%;
  ${flexStyles('column', 'flex-end', 'flex-end')};
  ${below.medium`
    width: 100%;
    ${flexStyles('column', 'center', 'center')};
  `}
`;

const LinkList = styled.ul`
  ${flexStyles('flex', 'center', 'center')};
  padding: 0.5rem;
  height: 100%;
  li {
    padding: 0.5rem;
  }
  a {
    font-size: 1.2em;
    text-transform: capitalize;
    transition: ${(props) => props.theme.transition.secondaryTransition};
    &:hover {
      color: ${({ theme }) => theme.colors.common};
    }
  }
`;

const SocialList = styled.ul`
  a > * {
    width: 4em !important;
    height: 4em !important;
    margin: 0 0.4rem;

    ${below.medium`

    margin: 0 0.9rem;
  `}
  }

  .gatsby-image-wrapper img {
    background: ${(props) => props.theme.colors.white};
  }
`;

const FooterList: React.FC<Props> = ({ navData }) => {
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
    <List>
      <LinkList>
        {navData.map((x) => (
          <li key={x.name}>
            <Link to={x.path}>{x.name}</Link>
          </li>
        ))}
      </LinkList>
      <SocialList>
        {edges.map(({ node }) => (
          <a
            href={`https://${node.name}${
              node.name !== 'masiuciszek' ? '.com/masiuciszek' : '.com'
            } `}
            key={node.name}
            target="_blank"
            rel="noreferrer"
          >
            <Img
              style={{ color: '#fff' }}
              fixed={node.childImageSharp.fixed}
              alt={node.name}
            />
          </a>
        ))}
      </SocialList>
    </List>
  );
};
export default FooterList;

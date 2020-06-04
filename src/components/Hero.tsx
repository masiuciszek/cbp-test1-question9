/* eslint-disable object-curly-newline */
/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import styled from 'styled-components';
import BackgroundImage, { IFluidObject } from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  className: string;
  children: React.ReactNode;
  img?: string;
  home?: boolean;
}

interface HeroQuery {
  heroBg: {
    childImageSharp: {
      fluid: IFluidObject | any;
    };
  };
}

const Hero: React.FC<Props> = ({ className, children, img, home }) => {
  const {
    heroBg: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery<HeroQuery>(
    graphql`
      {
        heroBg: file(relativePath: { eq: "city.jpeg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `,
  );

  return (
    <BackgroundImage className={className} fluid={fluid || img} home={home}>
      {children}
    </BackgroundImage>
  );
};

export default styled(Hero)`
  min-height: ${(props) => (props.home ? 'calc(90vh - 62px)' : '50vh')};
  background: linear-gradient(
    140deg,
    rgba(0, 0, 0, 0.6),
    rgba(21, 101, 192, 0.6)
  );
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

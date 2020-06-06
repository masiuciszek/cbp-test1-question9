import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Content from '@/components/Content';
import Layout, { PageWrapper } from '@/components/layout/Layout';
import Hero from '@/components/Hero';
import { IFluidObject } from 'gatsby-background-image';
import Title from '@/components/styled/elements/Title';

interface AboutProps {
  bgimg: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

const AboutPage: React.FC<PageProps<AboutProps>> = ({ data }) => {
  const {
    bgimg: {
      childImageSharp: { fluid },
    },
  } = data;

  return (
    <Layout title="About" description="About page">
      <Hero img={fluid} className="abouthero">
        <Title
          text="About"
          desc="About this application"
          cta
          padding
          bg="rgba(0,0,0,0.1)"
        />
      </Hero>
      <PageWrapper>
        <Content />
      </PageWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    bgimg: file(relativePath: { eq: "mm.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;

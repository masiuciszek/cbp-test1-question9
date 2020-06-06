import * as React from 'react';
import Layout, { PageWrapper } from '@/components/layout/Layout';
import Title from '@/components/styled/elements/Title';
import Hero from '@/components/Hero';
import { graphql, PageProps } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import SocialBox from '@/components/contact/SocialBox';

interface ContactQuery {
  contactBg: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

const Contact: React.FC<PageProps<ContactQuery>> = ({ data }) => (
  <Layout title="Contact" description="Contact page">
    <Hero img={data.contactBg.childImageSharp.fluid} className="Hero contact">
      <Title
        text="Contact"
        desc="Send a message"
        bg="rgba(0,0,0,0.1)"
        padding
      />
    </Hero>
    <PageWrapper>
      <SocialBox />
    </PageWrapper>
  </Layout>
);

export const pageQuery = graphql`
  {
    contactBg: file(relativePath: { eq: "pl.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
export default Contact;

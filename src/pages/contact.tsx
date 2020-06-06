/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import Layout, { PageWrapper } from '@/components/layout/Layout';
import Title from '@/components/styled/elements/Title';
import Hero from '@/components/Hero';
import { graphql, PageProps } from 'gatsby';
import { IFluidObject } from 'gatsby-background-image';
import SocialBox from '@/components/contact/SocialBox';
import Info from '@/components/Info';
import styled from 'styled-components';
import { flexStyles } from '@/components/styled/styled_utils/helpers';
import { below } from '@/components/styled/styled_utils/media';

interface ContactQuery {
  contactBg: {
    childImageSharp: {
      fluid: IFluidObject;
    };
  };
}

const TwoColGrid = styled.div`
  min-height: 60vh;
  ${flexStyles('flex', 'space-between', 'center')};
  ${below.medium`
    ${flexStyles('column', 'space-between', 'center')};
  `}
`;

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
      <TwoColGrid>
        <SocialBox />
        <Info
          title="My social platforms"
          firstText={`My name is Marcell and I am a developer form Gothenburg Sweden. Has a passion for Javascript,Typescript and functional programing λ✌🏼.
            I am always open to learn new stuff and techs. Hope you like this app example of using Gatsby , Typescript and specially focused on building a basic and useful blog with Styled-components and React Spring.

          `}
        />
      </TwoColGrid>
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

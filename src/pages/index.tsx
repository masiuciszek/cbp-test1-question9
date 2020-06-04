import React from 'react';
import { PageProps, graphql } from 'gatsby';
import Title from '@/components/styled/elements/Title';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/Hero';

interface Props {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
}

const Home: React.FC<PageProps<Props>> = ({ data }) => {
  const { title, description } = data.site.siteMetadata;
  return (
    <Layout title="Home" description="Home page">
      <Hero className="Hero" home>
        <Title text={title} desc={description} />
      </Hero>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

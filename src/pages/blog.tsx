/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import Layout, { PageWrapper } from '@/components/layout/Layout';
import BlogItem from '@/components/blog/BlogItem';
import styled from 'styled-components';
import { flexStyles } from '@/components/styled/styled_utils/helpers';
import BlogsLink from '@/components/BlogsLink';

type Node = {
  node: {
    frontmatter: FrontMatter;
  };
};

interface Props {
  allMarkdownRemark: {
    edges: Array<Node>;
  };
}

const BlogStyles = styled.div`
  padding: 1rem;
  height: 100%;
  ${flexStyles('column', 'center', 'center')};
`;
const Blog: React.FC<PageProps<Props>> = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout title="Blog" description="Blog page">
      <PageWrapper>
        <BlogStyles>
          {edges.map(({ node: { frontmatter } }) => (
            <BlogItem key={frontmatter.title} data={frontmatter} />
          ))}
          <BlogsLink />
        </BlogStyles>
      </PageWrapper>
    </Layout>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          frontmatter {
            date
            excerpt
            path
            tags
            title
          }
        }
      }
    }
  }
`;

export default Blog;

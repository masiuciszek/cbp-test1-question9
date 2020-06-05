import * as React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '@/components/layout/Layout';

const StyledBlogPost = styled.section`
  min-height: calc(100vh - 300px);
  #title {
    font-size: 3rem;
    padding: 2rem;
    text-align: center;
    text-transform: capitalize;
  }
`;

const BlogStyles = styled.article`
  max-width: 1000px;
  margin: 0 auto;
  p {
    font-size: 18px;
    line-height: 3rem;
  }
`;

const Links = styled.div`
  max-width: 700px;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0.5rem;
  a {
    color: #333;
    font-size: 1.6rem;
    border-bottom: 1px solid #333;
  }
`;

interface Data {
  markdownRemark: {
    html: string;
    frontmatter: {
      title: string;
    };
  };
}

interface PageContext {
  index: number;
  next: null | { frontmatter: { path: string } };
  prev: null | { frontmatter: { path: string } };
  pathSlug: string;
}

interface DataPageContext {
  data: Data;
  pageContext: PageContext;
}

const BlogPost: React.FC<DataPageContext> = ({ data, pageContext }) => {
  const { title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const { next, prev } = pageContext;

  return (
    <Layout title={`Blog post ${title}`} description="Blog post item">
      <StyledBlogPost>
        <h1 id="title"> {title} </h1>
        <BlogStyles dangerouslySetInnerHTML={{ __html: html }} />
        <Links>
          {prev && <Link to={`/blog${prev.frontmatter.path}`}>←Prev</Link>}
          {next && <Link to={`/blog${next.frontmatter.path}`}>Next →</Link>}
        </Links>
      </StyledBlogPost>
    </Layout>
  );
};

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: { eq: $pathSlug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default BlogPost;

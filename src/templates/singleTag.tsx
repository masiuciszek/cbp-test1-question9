/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable react/no-unescaped-entities */
import * as React from 'react';
import Layout from '@/components/layout/Layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { flexStyles } from '@/components/styled/styled_utils/helpers';

type FrontMatter = {
  frontmatter: {
    path: string;
    tags: string[];
    title: string;
  };
};
interface Props {
  data: any;
  pageContext: {
    posts: Array<FrontMatter>;
    tag: string;
  };
}

const TagStyles = styled.div`
  min-height: calc(100vh - 250px);
  .header {
    ${flexStyles('column', 'center', 'center')};
    h1 {
      font-size: 5rem;
      span {
        background: ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.white};
        padding: 0.2em 0.5em;
      }
    }
    h3 {
      font-size: 4rem;
      border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
  }
`;

const TagList = styled.ul`
  max-width: 800px;
  margin: 3rem auto;
  ${flexStyles('flex', 'center', 'center')};
  flex-wrap: wrap;
  padding: 2rem;
  li {
    padding: 0.5em;
  }
  a {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    font-family: 'Caveat', cursive;
    font-size: 3rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    padding: 0.6rem;
  }
`;

const SingleTag: React.FC<Props> = ({ data, pageContext }) => {
  const { posts } = pageContext;

  const formatUrl = (s: string, x: string) => s.replace(`${s}${x}`, '');
  return (
    <Layout
      title={`Tag ${pageContext.tag}`}
      description={`tag ${pageContext.tag}`}
    >
      <TagStyles>
        <div className="header">
          <h1>
            Tag <span>{pageContext.tag}</span>
          </h1>

          <h3>Post's for #{pageContext.tag}</h3>
        </div>
        <TagList className="tagsList">
          {posts.map((post) => (
            <li key={post.frontmatter.title}>
              <Link
                to={`${formatUrl('/blog', post.frontmatter.path)}${
                  post.frontmatter.path
                } `}
              >
                {post.frontmatter.title}
              </Link>
            </li>
          ))}
        </TagList>
      </TagStyles>
    </Layout>
  );
};
export default SingleTag;

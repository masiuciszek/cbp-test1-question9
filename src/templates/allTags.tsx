import * as React from 'react';
import styled from 'styled-components';
import Layout from '@/components/layout/Layout';
import { Link } from 'gatsby';

interface Props {
  data: undefined; // for now
  pageContext: {
    tags: Array<string>;
  };
}

const StyledTagsWrapper = styled.div`
  margin: 5rem auto;
  align-self: center;
  padding: 2rem;
  max-width: 1000px;
  min-height: 63vh;
  h1 {
    font-size: 3rem;
    text-align: center;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 70%;
  margin: 6em auto;
  a {
    color: ${(props) => props.theme.colors.primary};
    font-size: 2rem;
    padding: 0.5em;
    transition: ${(props) => props.theme.transition.mainTransition};
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      ${(props) => props.theme.shadows.elevations[3]};
    }
  }
`;

const AllTags: React.FC<Props> = ({ data, pageContext }) => (
  <Layout title="Tags" description="all tags">
    <StyledTagsWrapper>
      <h1> All Tags </h1>
      <Tags>
        {pageContext.tags.map((tag) => (
          <Link key={tag} to={`/tags/${tag}`}>
            #{tag}
          </Link>
        ))}
      </Tags>
    </StyledTagsWrapper>
  </Layout>
);
export default AllTags;

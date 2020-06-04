/* eslint-disable object-curly-newline */
/* eslint-disable quotes */
// Blog title for showcase on Blog page
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { flexStyles } from '../styled/styled_utils/helpers';

interface Props {
  data: FrontMatter;
}

const StyledBlogItem = styled.article`
  padding: 1.5rem 2rem;
  ${flexStyles(`column`, `center`, `center`)};
  width: 80%;
  margin: 2rem 0;
  h3 {
    font-size: 3rem;
    padding: 0.5rem;
    margin: 3rem;
    text-transform: capitalize;
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
    transition: ${(props) => props.theme.transition.mainTransition};
    &:hover {
      background: ${(props) => props.theme.colors.primary};
      color: ${(props) => props.theme.colors.white};
      border-bottom: 3px solid ${(props) => props.theme.colors.white};
    }
  }
`;

const BlogItem: React.FC<Props> = ({ data }) => {
  const { title, date, excerpt, tags, path } = data;

  return (
    <StyledBlogItem>
      <Link to={`/blog${path}`}>
        {` `}
        <h3>{title}</h3>
        {` `}
      </Link>
    </StyledBlogItem>
  );
};
export default BlogItem;

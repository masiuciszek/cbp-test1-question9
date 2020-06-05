import * as React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2rem;
  padding: 0.2rem 1rem;
  display: block;
  font-size: 3rem;
  margin: 4rem 0 2rem 0;
  background: ${({ theme }) => theme.colors.primary};
  transition: ${({ theme }) => theme.transition.quickTransition};
  &:hover {
    color: ${({ theme }) => theme.colors.common};
  }
`;

interface Props {}

const BlogsLink: React.FC<Props> = () => (
  <StyledLink to="/tags">Search by Tags</StyledLink>
);
export default BlogsLink;

/* eslint-disable quotes */
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

interface Props {
  className: string;
  navData: Array<NavData>;
}

const LargeListStyles = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  width: 60%;
  padding: 0.5rem;
  li {
    padding: 0.5em;
  }
  a {
    /* border: 2px solid red; */
    padding: 1rem;
    display: block;
    text-transform: capitalize;
    transition: ${(props) => props.theme.transition.mainTransition};
    &:hover {
      color: ${(props) => props.theme.colors.common};
    }
  }
`;

const LargeList: React.FC<Props> = ({ navData, className }): JSX.Element => (
  <LargeListStyles className={className}>
    {navData.map((link) => (
      <li key={link.name}>
        <Link to={link.path}>{link.name}</Link>
      </li>
    ))}
  </LargeListStyles>
);

export default styled(LargeList)``;

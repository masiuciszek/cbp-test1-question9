import * as React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

interface Props {
  className: string;
}

const Hero: React.FC<Props> = ({ className }) => {
  const a = `a`;
  console.log(a);
  return (
    <div className={className}>
      <h1> Legia CWSKS </h1>
    </div>
  );
};

export default styled(Hero)``;

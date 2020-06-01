import React from 'react';
import styled from 'styled-components';
import Layout from './componets/Layout';
import DDFake from './componets/styles/exp/Extends';

const Title = styled.h1`
  font-size: 4rem;
`;

function App() {
  return (
    <Layout>
      <Title>Hello</Title>
      <DDFake />
      <p></p>
    </Layout>
  );
}

export default App;

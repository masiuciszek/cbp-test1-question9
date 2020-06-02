import * as React from 'react';
import styled from 'styled-components';

interface P {
  className?: string;
}
const Fake: React.FC<P> = ({ className }) => {
  return (
    <div className={className}>
      {' '}
      <h1>Fake Component</h1>{' '}
    </div>
  );
};

const DDFake = styled(Fake)`
  h1 {
    color: red;
  }
`;

export default DDFake;

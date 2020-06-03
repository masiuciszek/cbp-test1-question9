import React from 'react';

interface Props {
  msg: string;
}

const Title: React.FC<Props> = ({ msg }) => <h1>{msg}</h1>;

export default Title;

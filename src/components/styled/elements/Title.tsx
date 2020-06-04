import React from 'react';

interface Props {
  msg: string;
  desc?: string;
}

const Title: React.FC<Props> = ({ msg, desc }) => (
  <>
    <h3>{msg}</h3>
    {desc && <p>{desc}</p>}
  </>
);

export default Title;

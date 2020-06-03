import { useState } from 'react';

export default (initialState = false): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
};

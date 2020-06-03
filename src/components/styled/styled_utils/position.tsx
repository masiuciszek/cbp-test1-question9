import { css } from 'styled-components';

const positionLeft = (position: string, x: string, y: string) => css`
  position: ${position};
  top: ${x}rem;
  left: ${y}rem;
`;

const positionRight = (position: string, x: string, y: string) => css`
  position: ${position};
  top: ${x}rem;
  right: ${y}rem;
`;

export { positionLeft, positionRight };

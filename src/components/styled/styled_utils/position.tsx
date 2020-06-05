import { css } from 'styled-components';

type Position = 'absolute' | 'relative';

const positionLeft = (position: Position, x: string, y: string) => css`
  position: ${position};
  top: ${x}rem;
  left: ${y}rem;
`;

const positionRight = (position: Position, x: string, y: string) => css`
  position: ${position};
  top: ${x}rem;
  right: ${y}rem;
`;

export { positionLeft, positionRight };

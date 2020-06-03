import { css } from 'styled-components';

export const flexStyles = (
  direction: string,
  justifyContent: string,
  alignItems: string,
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

import { css } from 'styled-components';

type Direction = 'flex' | 'column';
type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline'
  | 'stretch';

export const flexStyles = (
  direction: Direction,
  justifyContent: JustifyContent,
  alignItems: AlignContent,
) => css`
  display: flex;
  flex-direction: ${direction};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

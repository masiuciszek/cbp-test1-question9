import { css, ThemedCssFunction } from 'styled-components';

interface Size {
  mobileS: string;
  mobileM: string;
  mobileL: string;
  tablet: string;
  laptop: string;
  laptopL: string;
  desktop: string;
}
const size: Size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

interface Sizes {
  [key: string]: Size;
}

export const device: any = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

// export const above = Object.keys(size).reduce((acc, label) => {
//   acc[label] = (...args: any) => css`
//     @media (min-width: ${size[label] / 16}em) {
//       ${css(...args)}
//     }
//   `;
//   return acc;
// }, {});

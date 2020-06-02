import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    appSize: string;
    shadows: {
      main: string;
      secondary: string;
      optional: string;
    };
    colors: {
      primary: string;
      primaryShadow: string;
      secondary: string;
      secondaryShadow: string;
      dark: string;
      white: string;
      offWhite: string;
      danger: string;
      common: string;
    };
    sizes: {
      maxWidth: string;
      mainSpacing: string;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}

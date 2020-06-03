// This file holds ambient type declarations.
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    appSize: string;
    shadows: {
      elevations: Array<string>;
    };
    colors: {
      primary: string;
      primaryShadow: string;
      secondary: string;
      secondaryShadow: string;
      white: string;
      offWhite: string;
      danger: string;
      common: string;
      cinnamon: string;
      byz: string;
    };
    sizes: {
      maxWidth: string;
      mainSpacing: string;
    };
    brakePoints: {
      small: number;
      medium: number;
      large: number;
    };
    transition: {
      mainTransition: string;
      secondaryTransition: string;
      quickTransition: string;
    };
  }
}

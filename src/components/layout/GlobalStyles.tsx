/* eslint-disable quotes */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`



*::before,*::after,* {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    html {
      font-size: ${(props) => props.theme.appSize};
      font-family: 'Montserrat', sans-serif;
    }
    body {
      box-sizing: border-box;
      font-family: 'Montserrat', sans-serif;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
    }

    ul{
      list-style:none;
    }

    a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.white};
  }
`;

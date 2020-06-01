/* eslint-disable react/prop-types */
import * as React from 'react';
import styled, {
  ThemeProvider,
  DefaultTheme,
  createGlobalStyle,
} from 'styled-components';
import NavBar from './page/Navbar';
import Footer from './page/Footer';

const theme: DefaultTheme = {
  appSize: '10px',
  shadows: {
    main: 'box-shadow: 0px -1px 8px 0px rgba(0,0,0,0.6)',
    secondary: 'box-shadow: 0 15px 10px #777;',
    optional: `box-shadow:
                0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                0 12.5px 10px rgba(0, 0, 0, 0.06),
                0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                0 100px 80px rgba(0, 0, 0, 0.12)
  `,
  },
  colors: {
    primary: '#333',
    dark: '#2c213d',
    common: '#2e668b',
    secondary: '#298ca8',
    danger: '#ad5566',
    white: '#fff',
    offWhite: '#fefefe',
  },
  sizes: {
    maxWidth: '1100px',
    mainSpacing: '4px',
  },
  transition: {
    mainTransition: 'all .3s linear',
    secondaryTransition: 'all 0.3s ease-in-out',
    quickTransition: 'all 200ms ease-in-out',
  },
};

interface Props {
  children: React.ReactNode;
}

export const Page = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid red;
`;

const Main = styled.main`
  margin: 0 auto;
  border: 2px solid red;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  flex-grow: 1 auto;
  width: 100%;
`;

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <NavBar />
      <Page>
        <Main>{children}</Main>
      </Page>
      <Footer />
    </ThemeProvider>
  );
};

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');

*::before,*::after,* {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }


    html {
      font-size: ${(props) => props.theme.appSize};
      font-family: 'Open Sans Condensed', sans-serif;
    }

    body {
    box-sizing: border-box;
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
    color: ${(props) => props.theme.colors.dark};
  }


`;

export default Layout;

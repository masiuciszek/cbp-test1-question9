/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyles from './GlobalStyles';
import Nav from './navbar/Nav';
import Footer from './footer/Footer';

interface Props {
  children: React.ReactNode;
}

const theme: DefaultTheme = {
  appSize: '10px',
  shadows: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
    ],
  },
  colors: {
    primary: '#2a2b31',
    primaryShadow: 'rgba(42, 43, 49,.8)',
    common: '#83B692',
    secondary: '#F9ADA0',
    secondaryShadow: 'rgba(13, 71, 161, .8)',

    danger: '#F9627D',
    cinnamon: '#C65B7C',
    byz: '#0D47A1',
    white: '#fff',
    offWhite: '#fefefe',
  },
  brakePoints: {
    small: 400,
    medium: 960,
    large: 1140,
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

const Layout: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Nav className="nav" title="Marcell Ciszek" />
    <Page>
      <Main>{children}</Main>
    </Page>
    <Footer className="footer" />
  </ThemeProvider>
);

export default Layout;

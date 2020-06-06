/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import styled, { ThemeProvider, DefaultTheme } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyles from './GlobalStyles';
import Nav from './navbar/Nav';
import Footer from './footer/Footer';

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
}

const theme: DefaultTheme = {
  appSize: '10px',
  shadows: {
    elevations: [
      'box-shadow: inset 0 7px 9px -7px rgba(0,0,0, 0.7)',
      'box-shadow: 0 1px 3px rgba(0,0,0, 0.12), 0 1px 2px rgba(0,0,0, 0.24)',
      'box-shadow: 0 3px 6px rgba(0,0,0, 0.16), 0 3px 6px rgba(0,0,0, 0.23)',
      'box-shadow: 3px 2px rgba(42, 43, 49,.3)',
    ],
  },
  colors: {
    primary: '#212121',
    primaryShadow: 'rgba(42, 43, 49,.9)',
    common: '#1B76FF',
    secondary: '#4991ff',
    secondaryShadow: 'rgba(13, 71, 161, .9)',
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
`;

const Main = styled.main`
  /* margin: 0 auto; */
  /* max-width: ${(props) => props.theme.sizes.maxWidth}; */
  flex-grow: 1 auto;
  width: 100%;
`;
interface PageWrapperProps {
  medSize?: boolean;
}
export const PageWrapper = styled.div<PageWrapperProps>`
  margin: 2rem auto;
  max-width: ${(props) => props.theme.sizes.maxWidth};
`;

const Layout: React.FC<Props> = ({ children, title, description }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Nav className="nav" title="Marcell Ciszek" />
    <Page>
      <Main>{children}</Main>
    </Page>
    <Footer className="footer" />
  </ThemeProvider>
);

export default Layout;

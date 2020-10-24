import React from "react"
import { jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import styled, { Theme } from "./styled"

const colors = {
  primary: "#fec7d7",
  positive: "#0e172c",
  negative: "#d9d4e7",
  main: "#f9f8fc",
  highlight: "#a786df",
}

const theme: Theme = {
  appSize: "100%",
  borderRadius: "4px",
  colors,
  shadows: {
    elevations: [
      "0 0 0 1px rgba(0, 0, 0, 0.05)",
      "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      "0 0 0 3px rgba(66, 153, 225, 0.5)",
    ],
  },
  size: {
    h1: "3.052em",
    h2: "2.441em",
    h3: "1.953em",
    h4: "1.563em",
    h5: "1.25em",
    p: "1.15em",
    a: "1em",
    maxWidth: "900px",
    maxWidthPage: "970px",
  },
  transition: {
    mainTransition: "all .3s linear",
    secondaryTransition: "all 1s ease",
    quickTransition: "all 200ms ease-in-out",
  },
}

const Main = styled("main")`
  margin: 0 auto;
  background: ${props => props.theme.colors.primary};
`

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          *,
          *:before,
          *:after {
            margin: 0;
            padding: 0;
            box-sizing: inherit;
          }

          html {
            box-sizing: border-box;
            font-size: 100%;
          }

          body {
            font-weight: 400;
            line-height: 1.65;
            padding: 0;
            margin: 0;
            background: ${colors.main};
            font-family: "Anonymous Pro", monospace;
            font-weight: 400;
            line-height: 1.75;
            color: ${colors.positive};
          }

          h1,
          h2,
          h3,
          h4,
          h5 {
            margin: 3rem 0 1.38rem;
            font-family: "Poppins", sans-serif;
            font-weight: 400;
            line-height: 1.3;
          }

          h1 {
            margin-top: 0;
            font-size: 3.052rem;
          }

          h2 {
            font-size: 2.441rem;
          }

          h3 {
            font-size: 1.953rem;
          }

          h4 {
            font-size: 1.563rem;
          }

          h5 {
            font-size: 1.25rem;
          }

          small,
          .text_small {
            font-size: 0.8rem;
          }
        `}
      />

      <Main>{children}</Main>
    </ThemeProvider>
  )
}

export default Layout

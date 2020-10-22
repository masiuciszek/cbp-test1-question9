import React from "react"
import { jsx } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import styled, { Theme } from "./styled"

const theme: Theme = {
  colors: {
    primary: "#fec7d7",
    positive: "#0e172c",
    negative: "#d9d4e7",
    main: "#f9f8fc",
    highlight: "#a786df",
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
          }

          body {
            font-weight: 400;
            line-height: 1.65;
            padding: 0;
            margin: 0;
          }
        `}
      />
      <Main>{children}</Main>
    </ThemeProvider>
  )
}

export default Layout

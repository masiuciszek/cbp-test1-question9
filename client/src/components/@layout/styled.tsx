import { jsx } from "@emotion/core"
import styled, { CreateStyled } from "@emotion/styled"

export type Theme = {
  appSize: string
  borderRadius: string

  colors: {
    primary: string
    positive: string
    negative: string
    main: string
    highlight: string
  }
  shadows: {
    elevations: string[]
  }
  size: {
    h1: string
    h2: string
    h3: string
    h4: string
    h5: string
    p: string
    a: string
    maxWidth: string
    maxWidthPage: string
  }
  transition: {
    mainTransition: string
    secondaryTransition: string
    quickTransition: string
  }
}

export default styled as CreateStyled<Theme>

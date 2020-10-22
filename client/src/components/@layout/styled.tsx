import { jsx } from "@emotion/core"
import styled, { CreateStyled } from "@emotion/styled"

export type Theme = {
  colors: {
    primary: string
    positive: string
    negative: string
    main: string
    highlight: string
  }
}

export default styled as CreateStyled<Theme>

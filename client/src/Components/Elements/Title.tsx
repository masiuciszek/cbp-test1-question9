import React from "react"
import { styled } from "../Layout"

interface TitleProps {
  title: string
  subTitle?: string
  extraStyles?: any
}

interface StyledTitleProps {
  extraStyles?: any
}
const StyledTitle = styled("section")<StyledTitleProps>`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.positive};
  ${props => props.extraStyles && props.extraStyles};
`

const Title: React.FC<TitleProps> = ({ title, subTitle, extraStyles }) => {
  return (
    <StyledTitle extraStyles={extraStyles}>
      <h1>{title}</h1>
    </StyledTitle>
  )
}
export default Title

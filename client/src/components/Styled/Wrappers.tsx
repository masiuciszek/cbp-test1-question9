import { styled } from "../Layout"

export const Page = styled("section")`
  margin: 0 auto;
  min-height: 100vh;
`

export const Wrapper = styled("div")`
  margin: 0 auto;
  max-width: ${({ theme }) => theme.size.maxWidth};
`

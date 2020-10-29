import { styled } from "../Layout"
import { device } from "../Styled/helpers"

export const FormWrapper = styled("div")`
  font-size: 10px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  height: 100%;
  align-items: center;
`

export const FormStyled = styled("form")`
  padding: 1em 0.5em;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  width: 100%;
`

export const FormGroup = styled("div")`
  padding: 1.2em 0.5em;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  margin: 0.6em auto;
  @media ${device.mobileS} {
    width: 100%;
  }

  @media ${device.tablet} {
    width: 90%;
  }

  @media ${device.laptop} {
    width: 70em;
  }
`

export const Input = styled("input")`
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.positive};
  padding: 0.5em 0.8em;
  font-size: 1.5em;
  outline: none;
  transition: ${({ theme }) => theme.transition.mainTransition};
  box-shadow: ${({ theme }) => theme.shadows.elevations[3]};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.highlight};
    box-shadow: ${({ theme }) => theme.shadows.elevations[4]};
    width: 97%;
  }
`

export const Label = styled("label")`
  span {
    font-size: 2em;
    border-bottom: 2px solid ${({ theme }) => theme.colors.positive};
    font-weight: 600;
    margin: 0.5em 0;
    display: inline-block;
    opacity: 0;
    transform: translateY(-100%);
    transition: ${({ theme }) => theme.transition.quickTransition};
  }
  &:hover {
    span {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
export const Button = styled("button")`
  display: block;
  margin: 0.5em auto;
  width: 70%;
  font-size: 2.3em;
  padding: 0.3em 0.7em;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid ${({ theme }) => theme.colors.positive};
  box-shadow: ${({ theme }) => theme.shadows.elevations[3]};
  background: ${({ theme }) => theme.colors.positive};
  color: ${({ theme }) => theme.colors.main};
  transition: ${({ theme }) => theme.transition.quickTransition};
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.elevations[4]};
    width: 66%;
    background: transparent;
    color: ${({ theme }) => theme.colors.positive};
  }
  &:active {
    position: relative;
    top: 12px;
  }
`

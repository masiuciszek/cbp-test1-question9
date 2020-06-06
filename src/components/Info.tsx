/* eslint-disable quotes */
import * as React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';
import useTogle from '@/hooks/useTogle';
import { CtaLink } from './styled/elements/Buttons';
import { below } from './styled/styled_utils/media';

interface Props {
  title: string;
  firstText: string;
  secondaryText?: string;
  cta?: boolean;
  btnText?: string;
}

const InfoStyles = styled(animated.section)`
  flex: 1;
  padding: 0.6em;
  min-height: 60vh;
  ${CtaLink} {
    margin: 1.5rem auto;
  }
`;

const InfoTitle = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  padding: 1rem;
  font-family: 'Caveat', cursive;
`;

const Body = styled(animated.div)`
  ${below.medium`
    max-width: 80%;
    margin: 1rem auto;
`}
`;

const Info: React.FC<Props> = ({
  title,
  firstText,
  secondaryText,
  cta,
  btnText,
}) => {
  const [on, toggle] = useTogle(false);

  const props = useSpring({
    opacity: on ? 1 : 0,

    transform: on ? `translate3d(1%,0,0)` : `translate3d(100%,0,0)`,
  });

  return (
    <InfoStyles>
      <InfoTitle> {title} </InfoTitle>
      <CtaLink bg="#212121" cl="#fff" as="button" onClick={toggle}>
        Open
      </CtaLink>
      {on && (
        <Body style={props}>
          <animated.p style={props}>{firstText}</animated.p>
          <animated.p style={props}>{secondaryText}</animated.p>
        </Body>
      )}
    </InfoStyles>
  );
};
export default Info;

/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import {
  positionRight,
  positionLeft,
} from '@/components/styled/styled_utils/position';
import { Link } from 'gatsby';
import { flexStyles } from '@/components/styled/styled_utils/helpers';
import { above } from '@/components/styled/styled_utils/media';

interface Props {
  navData: NavData[];
  on: boolean;
}

const Left = styled(animated.div)`
  width: 45%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primaryShadow};
  ${flexStyles('column', 'center', 'center')};
  ${positionLeft('absolute', '0', '0')}
  ${above.medium` display: none;`}
  h1,p {
    color: ${({ theme }) => theme.colors.white};
  }
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 19px;
  }
`;

const Right = styled(animated.div)`
  width: 55%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondaryShadow};
  ${positionRight('absolute', '0', '0')}
  ${flexStyles('flex', 'center', 'center')};
  ${above.medium` display: none;`}
`;

const RightList = styled.ul`
  width: 100%;
  padding: 1em;
  ${flexStyles('column', 'center', 'center')};
  li {
    padding: 0.2em;
    width: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2em;
    text-transform: capitalize;
    text-align: left;
    transition: ${({ theme }) => theme.transition.quickTransition};
    padding: 0.35em;
    display: block;
    &:hover {
      padding: 0.3em;
      border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    }
  }
`;

const AnimationList: React.FC<Props> = ({ navData, on }) => {
  const { x, opacity } = useSpring({
    x: on ? 0 : 100,
    opacity: on ? 1 : 0,
  });
  return (
    <>
      <Left
        style={{
          transform: x.interpolate((x) => `translate3d(${x * -1}%,0,0)`),
          opacity,
        }}
      >
        <h1>Marcell Ciszek</h1>
        <p>Simple Gatsby Application</p>
      </Left>
      <Right
        style={{
          transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
          opacity,
        }}
      >
        <RightList>
          {navData.map(({ name, path }) => (
            <li key={name}>
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </RightList>
      </Right>
    </>
  );
};
export default AnimationList;

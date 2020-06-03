/* eslint-disable quotes */
import * as React from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import {
  positionRight,
  positionLeft,
} from '@/components/styled/styled_utils/position';
import { Link } from 'gatsby';
import { flexStyles } from '@/components/styled/styled_utils/helpers';

interface Props {
  navData: NavData[];
  on: boolean;
}

const Left = styled(animated.div)`
  width: 45%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primaryShadow};
  ${positionLeft(`absolute`, `0`, `0`)}
`;
const Right = styled(animated.div)`
  width: 55%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.secondaryShadow};
  ${positionRight(`absolute`, `0`, `0`)}
  ${flexStyles(`flex`, `center`, `center`)};
`;

const RightList = styled.ul`
  width: 100%;
  padding: 1em;
  ${flexStyles(`column`, `center`, `center`)};
  li {
    padding: 0.2em;
    width: 100%;
  }
  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: 2em;
    text-transform: capitalize;
    text-align: center;
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
  const { x } = useSpring({
    x: on ? 100 : 0,
    // opacity: on ? 1 : 0,
    // zIndex: on ? 1 : 0,
  });
  return (
    <>
      <Left
        style={{
          transform: x.interpolate((x) => `translate3d(${x * -1}%,0,0)`),
        }}
      >
        <h1>Left</h1>
      </Left>
      <Right
        style={{
          transform: x.interpolate((x) => `translate3d(${x}%,0,0)`),
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

/* eslint-disable quotes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @typescript-eslint/quotes */
import * as React from 'react';
import styled from 'styled-components';
import { positionRight } from '@/components/styled/styled_utils/position';
import { above, below } from '@/components/styled/styled_utils/media';
import { flexStyles } from '@/components/styled/styled_utils/helpers';
import useToggle from '@/hooks/useTogle';
import LargeList from './LargeList';
import AnimatedList from './AnimationList';

interface Props {
  // className: React.StyleHTMLAttributes<React.ClassAttributes<any>>;
  className: string;
  title?: string;
}

export const NavTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  padding: 0.2rem 1.5rem;
  width: 40%;
  font-size: 2em;
`;

const Nav: React.FC<Props> = ({ className, title = 'App Title' }) => {
  const [navData, setNavData] = React.useState<NavData[]>([
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'about',
      path: '/about',
    },
    {
      name: 'blog',
      path: '/blog',
    },
    {
      name: 'contact',
      path: '/contact',
    },
  ]);

  const [on, toggle] = useToggle(false);

  return (
    <nav className={className}>
      <span id="navIcon" onClick={toggle}>
        Menu
      </span>
      <NavTitle>{title}</NavTitle>
      <LargeList navData={navData} className="largeList" />
      <AnimatedList navData={navData} on={on} />
    </nav>
  );
};

export default styled(Nav)`
  background: ${(props) => props.theme.colors.primary};
  padding: 1em 1em;
  position: relative;

  ${flexStyles('flex', 'space-between', 'center')}

  #navIcon {
    color: ${(props) => props.theme.colors.white};
    ${positionRight('absolute', '2', '2')};
    cursor: pointer;
    display: none;
    z-index: 5;
    ${below.medium` display: block `};
    transition: ${(props) => props.theme.transition.quickTransition};
    &:hover {
      color: ${(props) => props.theme.colors.common};
    }
  }

  ${LargeList} {
    ${below.medium` display: none `}
  }
`;

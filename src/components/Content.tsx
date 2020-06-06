import * as React from 'react';
import styled from 'styled-components';
import { contentData } from '@/utils/data';
import { below, above } from './styled/styled_utils/media';

const Article = styled.article`
  #title {
    text-align: center;
    padding: 2rem;
    font-size: 4.5rem;
    text-transform: capitalize;
    border-bottom: 2px solid ${(props) => props.theme.colors.primary};
    font-family: 'Caveat', cursive;
  }
`;

const Section = styled.section`
  padding: 1.5rem;
`;
interface BgImgProps {
  img?: string;
}
const BgImg = styled.div<BgImgProps>`
  width: 100%;
  height: 360px;
  background: ${(props) =>
    props.img && `url(${props.img})`} center center no-repeat;
  /* background-image: ${(props) => props.img && `url(${props.img})`}; */
  background-attachment: fixed;
  margin: 4rem 0;
  position: relative;
  ${(props) => props.theme.shadows.elevations[1]};
  &:after {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    background: rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 100%;
  }
  ${below.medium`
    background-attachment: local;
    background-position: top bottom;
  `}
`;

const BlackQuote = styled.blockquote`
  font-family: 'Caveat', cursive;
  font-size: 6rem;
  padding: 1rem;
  line-height: 7rem;
  margin-left: 5rem;
  width: 80%;
  border-left: 3px solid ${(props) => props.theme.colors.primary};
  ${below.medium`
    font-size: 4rem;
  `}
`;

const Content: React.FC = () => {
  const [content, setContent] = React.useState<Content[]>(contentData);
  return (
    <Article>
      <h3 id="title">Our Story</h3>
      {content.map(({ id, text, img, blackQuote }) => (
        <Section key={id}>
          {img && <BgImg img={img} />}
          <p>{text}</p>
          {blackQuote && <BlackQuote>{blackQuote}</BlackQuote>}
        </Section>
      ))}
    </Article>
  );
};
export default Content;

import * as React from 'react';
import styled from 'styled-components';
import { contentData } from '@/utils/data';

const Article = styled.article``;

const Section = styled.section``;

const Content: React.FC = () => {
  const [content, setContent] = React.useState<Content[]>(contentData);
  return (
    <Article>
      {content.map(({ id, text }) => (
        <Section key={id}>
          <p>{text}</p>
        </Section>
      ))}
    </Article>
  );
};
export default Content;

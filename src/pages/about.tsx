import * as React from 'react';
import { PageProps } from 'gatsby';
import Content from '@/components/Content';
import Layout, { PageWrapper } from '@/components/layout/Layout';

const AboutPage: React.FC<PageProps> = () => (
  <Layout title="About" description="About page">
    <PageWrapper>
      <Content />
    </PageWrapper>
  </Layout>
);
export default AboutPage;

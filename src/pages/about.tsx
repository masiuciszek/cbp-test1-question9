import * as React from 'react';
import { PageProps } from 'gatsby';
import Content from '@/components/Content';
import Layout from '@/components/layout/Layout';

const AboutPage: React.FC<PageProps> = () => (
  <Layout title="About" description="About page">
    <Content />
  </Layout>
);
export default AboutPage;

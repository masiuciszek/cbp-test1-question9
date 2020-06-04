import * as React from 'react';
import Layout, { PageWrapper } from '@/components/layout/Layout';

interface Props {}

const Contact: React.FC<Props> = () => (
  <Layout title="Contact" description="Contact page">
    <PageWrapper>
      <h1> Legia CWSKS </h1>
    </PageWrapper>
  </Layout>
);
export default Contact;

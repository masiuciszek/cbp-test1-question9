/* eslint-disable quotes */
import React from "react";
import { PageProps } from "gatsby";
import styled from "styled-components";
import Title from "@/components/styled/elements/Title";
import Layout from "@/components/layout/Layout";

const Apa = styled.h1`
  font-size: 5rem;
`;

const Home: React.FC<PageProps> = () => (
  <Layout title="Home" description="Home page">
    <Title msg="hello" />
    <Apa>Marcell</Apa>
  </Layout>
);

export default Home;

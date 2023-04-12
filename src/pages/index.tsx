import React from 'react';
import type { PageProps } from "gatsby";
import styled from 'styled-components';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';


const HomePage = ({ location }: PageProps) => {
  return (
    <Layout location={location}>

    </Layout>
  )
};

export const Head = () => <Seo title="Home Page" />;

export default HomePage;

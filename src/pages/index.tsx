import React, { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Seo from '../components/seo';

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/boat-me.jpg" alt="Me on my boat" />
    </Layout>
  )
};

export const Head: HeadFC = () => <Seo title="Home Page" />;

export default IndexPage;

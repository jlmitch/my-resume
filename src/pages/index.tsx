import React, { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/boat-me.jpg" alt="Me on my boat" />
    </Layout>
  )
};

export const Head: HeadFC = () => <title>Home Page</title>;

export default IndexPage;

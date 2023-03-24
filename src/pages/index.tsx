import React, { FC } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';

const HomePage: FC = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage src="../images/boat-me.jpg" alt="Me on my boat" />
    </Layout>
  )
};

export const Head = () => <Seo title="Home Page" />;

export default HomePage;

import React, { FC } from 'react';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';

const AboutPage: FC = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
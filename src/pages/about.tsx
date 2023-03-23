import React, { FC } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';


const AboutPage: FC<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  )
};

// export const Head: HeadFC = () => <title>About Me</title>;
export const Head: HeadFC = () => <Seo title="About Me" />;

export default AboutPage;

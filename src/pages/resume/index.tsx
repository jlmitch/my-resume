import React, { FC } from 'react';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';

const ResumePage: FC = () => {
  return (
    <Layout pageTitle="Resume">
      <p>This will be my downloadable Resume</p>
    </Layout>
  )
};

export const Head = () => <Seo title="My Resume" />;

export default ResumePage;

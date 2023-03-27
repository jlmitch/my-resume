import React, { FC } from 'react';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';
import Resume from '../../components/resume/Resume';

const ResumePage: FC = () => {
  return (
    <Layout pageTitle="Resume">
      <p>This will be my downloadable Resume</p>
      
      <Resume />
    </Layout>
  )
};

export const Head = () => <Seo title="My Resume" />;

export default ResumePage;

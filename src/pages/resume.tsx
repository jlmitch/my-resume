import React, { FC } from 'react';
import Layout from '../components/layout';

const ResumePage: FC = () => {
  return (
    <Layout pageTitle="Resume">
      <p>This will be my downloadable Resume</p>
    </Layout>
  )
};

export const Head = () => <title>Resume</title>;

export default ResumePage;

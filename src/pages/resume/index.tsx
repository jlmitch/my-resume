import React, { FC } from 'react';
import type { HeadFC } from 'gatsby';
import Layout from '../../components/layout/Layout';

const ResumePage: FC = () => {
  return (
    <Layout pageTitle="Resume">
      <p>This will be my downloadable Resume</p>
    </Layout>
  )
};

export const Head: HeadFC = () => <title>Resume</title>;

export default ResumePage;

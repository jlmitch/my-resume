import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';
import Resume from '../../components/resume/Resume';
import type { PageProps } from 'gatsby';

const Download = styled.a`
  font-family: 'Open Sans', 'sans-serif';
  font-size: 16px;
  display: inline-block;
  background-color: #BFA181;
  text-decoration: none;
  border: 2px solid #BFA181;
  color: #0A1828;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;

  &:hover {
    background-color: #0A1828;
    color: #BFA181;
  }
`;

const ResumePage = ({ location }: PageProps) => (
  <Layout
    location={location}
    actionButtons={[
      <Download
        href="https://drive.google.com/file/d/1ZMutrGhwFRYkFmmEGABwFWemIhl4WDrS/view?usp=share_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </Download>
    ]}
  >
    <Resume />
  </Layout>
);

export const Head = () => <Seo title="My Resume" />;

export default ResumePage;

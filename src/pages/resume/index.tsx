import React, { FC } from 'react';
import styled from 'styled-components';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';
import Resume from '../../components/resume/Resume';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Download = styled.a`
  display: inline-block;
  background-color: rebeccapurple;
  text-decoration: none;
  border: 1px solid rebeccapurple;
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;

  &:hover {
    background-color: #fff;
    color: rebeccapurple;

  }
`;

const ResumePage: FC = () => (
  <Layout pageTitle="Resume">
    <Wrapper>
      <div />
      
      <Download
        href="https://drive.google.com/file/d/1ZMutrGhwFRYkFmmEGABwFWemIhl4WDrS/view?usp=share_link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </Download>
    </Wrapper>

    <Resume />
  </Layout>
);

export const Head = () => <Seo title="My Resume" />;

export default ResumePage;

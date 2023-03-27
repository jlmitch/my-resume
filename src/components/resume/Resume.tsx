import React from 'react';
import styled from 'styled-components';
import Skills from './skills/Skills';
import Header from './header/Header';

const ResumeContainer = styled.div`
  border: 1px solid gray;
  height: 100vh;
  padding: 32px;
  width: 798px;
`;

const Resume = () => (
  <ResumeContainer>
    <Header />

    <Skills />
  </ResumeContainer>
);

export default Resume;

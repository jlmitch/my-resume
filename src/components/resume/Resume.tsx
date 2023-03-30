import React from 'react';
import styled from 'styled-components';
import Skills from './skills/Skills';
import Header from './header/Header';
import Background from './background/Background';
import Work from './background/work/Work';
import Education from './background/education/Education';

const ResumeContainer = styled.div`
  width: 100%;
  max-width: 798px;
`;

const Resume = () => (
  <ResumeContainer>
    <Header />

    <Skills />

    <Background header="experience">
      <Work />
    </Background>

    <Background header="education">
      <Education />
    </Background>
  </ResumeContainer>
);

export default Resume;

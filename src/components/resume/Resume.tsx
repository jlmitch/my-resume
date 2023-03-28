import React from 'react';
import styled from 'styled-components';
import Skills from './skills/Skills';
import Header from './header/Header';
import Background from './background/Background';
import Work from './background/work/Work';
import Education from './background/education/Education';

const ResumeContainer = styled.div`
  border: 1px solid gray;
  height: 1075px;
  overflow: auto;
  padding: 32px;
  width: 798px;
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

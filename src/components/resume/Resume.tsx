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
  background-color: #fff;
  padding: 0;
  box-shadow:
    0 0 0vw 0.2vw #f7ffff,
    0 0 0.4vw 0.2vw #faca97,
    0 0 2vw 0vw #BFA181,
    inset 0 0 1vw 0.2vw #BFA181,
    inset 0 0 0.2vw 0vw #faca97,
    inset 0 0 0.3vw 0vw #f7ffff;

  & .filler {
    height: 20px;
  }
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

    <div className="filler" />
  </ResumeContainer>
);

export default Resume;

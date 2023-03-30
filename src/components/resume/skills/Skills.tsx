import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-family: 'Open Sans', 'sans-serif';
  margin-bottom: 18px;
  padding: 0 20px;
  text-transform: uppercase;

  /* Small devices such as large phones (640px and up) */
  @media only screen and (min-width: 40em) {
    padding: 0;
    margin-bottom: 38px;
  }
`;

const Category = styled.div`
  color: #4975C5;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  font-weight: 700;
  padding-bottom: 26px;
  text-transform: uppercase;
`;

const SkillListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Times New Roman', Times, serif;
  margin-bottom: 18px;
  padding: 0 27px;

  & .skills {
    font-size: 18px;
    line-height: 22px;

    &.tech-skills {
      padding: 0 15px;
    }

    &.interpersonal-skills {
      padding: 0 15px;
    }
  }

  /* Small devices such as large phones (640px and up) */
  @media only screen and (min-width: 40em) {
    flex-direction: row;
    align-items: center;

    & .skills.tech-skills {
        padding: 0 66px;
    }
  }
`;

const Skills = () => (
  <SkillsContainer>
    <SectionTitle>skills</SectionTitle>

    <SkillListWrapper>
      <Category>technical:</Category>

      <div className="skills tech-skills">
        JavaScript / Webpack / React / Redux / Sass / Jest / Enzyme /
        React Testing Library / Git / HTML / CSS
      </div>
    </SkillListWrapper>

    <SkillListWrapper>
      <Category>interpersonal:</Category>

      <div className="skills interpersonal-skills">
        Excellent Communicator / Team Player / Dependable / Empathetic /
        Positive Attitude / Active Listener / Problem Solver / Resilient
      </div>
    </SkillListWrapper>
  </SkillsContainer>
);

export default Skills;

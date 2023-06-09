import React, { FC } from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  color: #595959;
  margin-bottom: 20px;
  padding-left: 20px;

  /* Small devices such as large phones (640px and up) */
  @media only screen and (min-width: 40em) {
    padding-left: 42px;
  }
`;

const TimeRange = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const PositionInfo = styled.div`
  font-size: 20px;
  text-transform: uppercase;

  & .title {
    color: #4975C5;
    font-weight: 700;
    text-transform: uppercase;
  }

  & .gpa {
    color: #000;
    text-transform: uppercase;
  }
`;

const ExperienceInfo = styled.div`
  display: flex;
  flex-direction: column;
`;


export const DescriptionList = styled.ul`
  font-size: 16px;
  line-height: 25px;
  list-style-position: outside;
  padding-left: 52px;
`;

interface ExperienceSectionProps {
  children?: React.ReactNode;
  experience: string;
  gpa?: string;
  isEdu?: boolean;
  location?: string;
  timeRange: string;
  title: string;
}

const ExperienceSection: FC<ExperienceSectionProps> = ({
  children,
  experience,
  gpa,
  isEdu = false,
  location,
  timeRange,
  title,
}) => (
  <SectionContainer>
    <ExperienceInfo>
      <TimeRange>
        {timeRange}
      </TimeRange>

      {!isEdu || !gpa
        ? <PositionInfo>
            <span className="title">{title},</span> {experience} / {location} 
          </PositionInfo>
        : <PositionInfo>
            <span className="title">{title},</span> {experience}, <span className="gpa">{gpa}</span>
          </PositionInfo>
      }
    </ExperienceInfo>

    <div>{children}</div>
  </SectionContainer>
);

export default ExperienceSection;

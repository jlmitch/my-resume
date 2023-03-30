import React from 'react';
import BackgroundSection, { DescriptionList } from '../BackgroundSection';

const Education = () => (
  <>
    <BackgroundSection
      experience="general assembly"
      location="boston ma"
      timeRange="september 2016"
      title="web development immersive"
    >
      <DescriptionList>
        <li>
          Duration: 12 weeks / 480 hours
        </li>

        <li>
          Specialized in: JavaScript, Ruby, HTML, CSS, Ember.js, PostgreSQL, MongoDB, Ruby on Rails.
        </li>

        <li>
          Created one frontend project and two full-stack projects using the skills learned during the program.
        </li>
      </DescriptionList>
    </BackgroundSection>

    <BackgroundSection
      experience="lesley university"
      gpa="gpa 3.3/4.0"
      isEdu={true}
      timeRange="may 2016"
      title="bachelors in holistic psychology"
    />
  </>
);

export default Education;

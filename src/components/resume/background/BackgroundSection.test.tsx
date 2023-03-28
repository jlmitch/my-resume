import React from 'react';
import { render, screen } from '@testing-library/react';
import BackgroundSection from './BackgroundSection';

describe('BackgroundSection', () => {
  test('should render contents for work experience', () => {
    render(
      <BackgroundSection
        experience="Dunder Mifflin"
        location="Scranton, PA"
        timeRange="2005 - 2010"
        title="Assistant to the Regional Manager"
      >
        <div>I am a child element</div>
      </BackgroundSection>
    );

    expect(screen.getByText('2005 - 2010')).toBeInTheDocument();
    expect(screen.getByText('Assistant to the Regional Manager,')).toBeInTheDocument();
    expect(screen.getByText('Dunder Mifflin / Scranton, PA')).toBeInTheDocument();
    expect(screen.getByText('I am a child element')).toBeInTheDocument();
  });

  test('should render contents for school experience', () => {
    render(
      <BackgroundSection
        experience="University of Georgia"
        gpa="GPA 3.3/4.0"
        isEdu={true}
        timeRange="September 2016"
        title="Bachelor of Science in Computer Science"
      >
        <div>I am a child element</div>
      </BackgroundSection>
    );

    expect(screen.getByText('September 2016')).toBeInTheDocument();
    expect(screen.getByText('Bachelor of Science in Computer Science,')).toBeInTheDocument();
    expect(screen.getByText('University of Georgia,')).toBeInTheDocument();
    expect(screen.getByText('GPA 3.3/4.0')).toBeInTheDocument();
    expect(screen.getByText('I am a child element')).toBeInTheDocument();
  });
});

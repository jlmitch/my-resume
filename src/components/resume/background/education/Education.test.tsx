import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education';

describe('Education', () => {
  test('should render contents for Education experience', () => {
    render(<Education />);

    expect(screen.getByText('september 2016')).toBeInTheDocument();
    expect(screen.getByText('web development immersive,')).toBeInTheDocument();
    expect(screen.getByText('general assembly / boston ma')).toBeInTheDocument();
    expect(screen.getByText('Duration: 12 weeks / 480 hours')).toBeInTheDocument();
    expect(screen.getByText('Specialized in: JavaScript, Ruby, HTML, CSS, Ember.js, PostgreSQL, MongoDB, Ruby on Rails.')).toBeInTheDocument();
    expect(screen.getByText('Created one frontend project and two full-stack projects using the skills learned during the program.')).toBeInTheDocument();

    expect(screen.getByText('may 2016')).toBeInTheDocument();
    expect(screen.getByText('bachelors in holistic psychology,')).toBeInTheDocument();
    expect(screen.getByText('lesley university,')).toBeInTheDocument();
    expect(screen.getByText('gpa 3.3/4.0')).toBeInTheDocument();
  });
});

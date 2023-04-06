import React from 'react';
import { render, screen } from '@testing-library/react';
import Work from './Work';

describe('Work', () => {
  test('should render contents for work experience', () => {
    render(<Work />);

    expect(screen.getByText('2022 - present')).toBeInTheDocument();
    expect(screen.getByText('senior software engineer,')).toBeInTheDocument();
    expect(screen.getByText('knockcrm / remote')).toBeInTheDocument();

    expect(screen.getByText('2019 - 2022')).toBeInTheDocument();
    expect(screen.getByText('software engineer,')).toBeInTheDocument();
    expect(screen.getByText('validity, inc / boston ma')).toBeInTheDocument();
    expect(screen.getByText(
      'Worked on an agile scrum team to revamp an outdated product, DemandTools, by building and releasing an Electron application using Webpack, React, and Redux.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Achieved nearly 100% frontend test coverage by writing test proven and maintainable code for all pull requests using Jest, Enzyme, Cypress, and React Testing Library.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Took lead on refreshing Validity\'s Webstore with React and Sass, contributing regularly to Validity\'s reusable React component library by building needed components for new features.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Provided peer to peer code reviews using GitHub and contributed to multiple projects within Validity\'s monorepo.'
    )).toBeInTheDocument();

    expect(screen.getByText('2016 - 2019')).toBeInTheDocument();
    expect(screen.getByText('ui engineer,')).toBeInTheDocument();
    expect(screen.getByText('vestmark / boston ma')).toBeInTheDocument();
    expect(screen.getByText(
      'Worked on an agile scrum team of developers to build and implement new frontend features for a financial wealth management software, VesmarkONE.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Implemented new features and resolved user-facing bugs using Vanilla JavaScript, HTML, and CSS.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Helped to bring in Webpack, allowing the use of ES6 standard JavaScript while also implementing React.js and Sass on multiple Vestmark platforms.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Provided peer-to-peer code reviews using Bitbucket and contributed to multiple projects within the company.'
    )).toBeInTheDocument();

    expect(screen.getByText('2008 - 2011')).toBeInTheDocument();
    expect(screen.getByText('fireman,')).toBeInTheDocument();
    expect(screen.getByText('united states coast guard / boston ma')).toBeInTheDocument();
    expect(screen.getByText(
      'Learned to incorporated Honor, Respect, and Devotion to Duty into the daily fabric of my life.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Developed strong teamwork abilities by working alongside others to achieve common goals.'
    )).toBeInTheDocument();
    expect(screen.getByText(
      'Learned how to work within a team of individuals, communicate effectively, and give maximum effort to everything pursued through service in the Coast Guard.'
    )).toBeInTheDocument();
  });
});

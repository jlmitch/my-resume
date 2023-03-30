import React from 'react';
import BackgroundSection, { DescriptionList } from '../BackgroundSection';

const Work = () => (
  <>
    <BackgroundSection
      experience="knockcrm"
      location="remote"
      timeRange="2022 - present"
      title="senior software engineer"
    />

    <BackgroundSection
      experience="validity, inc"
      location="boston ma"
      timeRange="2019 - 2022"
      title="software engineer"
    >
      <DescriptionList>
        <li>
          Worked on an agile scrum team to revamp an outdated product, DemandTools, by building and releasing an Electron application using Webpack, React, and Redux.
        </li>

        <li>
          Achieved nearly 100% frontend test coverage by writing test proven and maintainable code for all pull requests using Jest, Enzyme, Cypress, and React Testing Library.
        </li>

        <li>
          Took lead on refreshing Validity's Webstore with React and Sass, contributing regularly to Validity's reusable React component library by building needed components for new features.
        </li>

        <li>
          Provided peer to peer code reviews using GitHub and contributed to multiple projects within Validity's monorepo.
        </li>
      </DescriptionList>
    </BackgroundSection>

    <BackgroundSection
      experience="vestmark"
      location="boston ma"
      timeRange="2016 - 2019"
      title="ui engineer"
    >
      <DescriptionList>
        <li>
          Worked on an agile scrum team of developers to build and implement new frontend features for a financial wealth management software, VesmarkONE.
        </li>

        <li>
          Implemented new features and resolved user-facing bugs using Vanilla JavaScript, HTML, and CSS.
        </li>

        <li>
          Helped to bring in Webpack, allowing the use of ES6 standard JavaScript while also implementing React.js and Sass on multiple Vestmark platforms.
        </li>

        <li>
          Provided peer-to-peer code reviews using Bitbucket and contributed to multiple projects within the company.
        </li>
      </DescriptionList>
    </BackgroundSection>

    <BackgroundSection
      experience="united states coast guard"
      location="boston ma"
      timeRange="2008 - 2011"
      title="fireman"
    >
      <DescriptionList>
        <li>
          Learned to incorporated Honor, Respect, and Devotion to Duty into the daily fabric of my life.
        </li>

        <li>
          Developed strong teamwork abilities by working alongside others to achieve common goals.
        </li>

        <li>
          Learned how to work within a team of individuals, communicate effectively, and give maximum effort to everything pursued through service in the Coast Guard.
        </li>
      </DescriptionList>
    </BackgroundSection>
  </>
);

export default Work;

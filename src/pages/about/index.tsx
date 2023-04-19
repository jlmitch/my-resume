import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import type { PageProps } from 'gatsby';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';
import { useViewport } from '../../hooks/useViewport';

const Wrapper = styled.div`
  padding: 0 40px;
`;

const Description = styled.p`
  padding: 0 5px;
  font-size: 16px;
  color: #FFFFFF;

  /* Small devices such as large phones (640px and up) */
  @media only screen and (min-width: 40em) {
    font-size: 24px;
    padding: 0 40px;
  }
`;

const generalStyles = {
  zIndex: '-1',
  width: '250px',
  height: '250px',
  float: 'left' as const,
  margin: '0 80px 0 40px',
  borderRadius: '50%',
  shapeOutside: 'circle()',
  boxShadow: '0 0 0vw  0.2vw #f7ffff, 0 0 0.4vw  0.2vw #a3fcf9, 0 0 2vw 0vw #178582, inset 0 0 1vw 0.2vw #178582, inset 0 0 0.2vw 0vw #1eb3ae, inset 0 0 0.3vw 0vw #f7ffff',
}

const imageStylesSmall = {
  ...generalStyles,
  width: '150px',
  height: '150px',
  margin: '0 40px 0 5px',
};

const imageStylesBig = {
  ...generalStyles,
  width: '250px',
  height: '250px',
};

const AboutPage = ({ location }: PageProps) => {
  const { screenWidth } = useViewport();

  return (
    <Layout pageTitle="About Me" location={location}>
      <Wrapper>
        <StaticImage style={screenWidth <= 640 ? imageStylesSmall : imageStylesBig} src="../../images/boat-me.jpg" alt="Me on my boat" />

        <Description>
          As a Senior Software Engineer at KnockCRM, I bring years of experience in software development, UI engineering, and agile methodologies.
          Prior to my current role, I worked as a Software Engineer at Validity Inc, where I contributed to revamping an outdated product, DemandTools,
          by building and releasing an Electron application using Webpack, React, and Redux.
          <br /><br />
          Before my career in tech, I served as a Fireman in the United States Coast Guard, where I learned the importance of teamwork and effective communication.
          <br /><br />
          I hold a Bachelor's in Holistic Psychology from Lesley University and completed a Web Development Immersive program at General Assembly,
          specializing in JavaScript, Ruby, HTML, CSS, Ember.js, PostgreSQL, and MongoDB.
          <br /><br />
          My expertise lies in JavaScript, React, Redux, HTML and CSS, and I have experience working on agile scrum teams, leading scrum ceremonies, contributing to reusable component libraries,
          and providing peer-to-peer code reviews.
        </Description>
      </Wrapper>

    </Layout>
  )
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;

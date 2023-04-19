import React from 'react';
import type { PageProps } from "gatsby";
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import { useViewport } from '../hooks/useViewport';
import { StaticImage } from 'gatsby-plugin-image';
import TypeIt from "typeit-react";


const imageStylesSmall = {
  zIndex: '-1',
  height: '200px',
};

const imageStylesBig = {
  zIndex: '-1',
  height: '500px',
};

const typingStylesGeneral = {
  color: '#FFFFFF',
  display: 'inline-block',
  margin: '55px 0 0 25px',
};

const typingStylesBig = {
  ...typingStylesGeneral,
  fontSize: '3em',

  span: {
    '& .ti-cursor': {
      fontSize: '3em'
    },
  },
};

const typingStylesSmall = {
  ...typingStylesGeneral,
  fontSize: '1.5em',
  margin: '25px 0 0 25px',
  span: {
    '& .ti-cursor': {
      fontSize: '1em'
    },
  },
};

const HomePage = ({ location }: PageProps) => {
  const { screenWidth } = useViewport();
  const typeStyles = screenWidth <= 640 ? typingStylesSmall : typingStylesBig;
  const imageStyles = screenWidth <= 640 ? imageStylesSmall : imageStylesBig;

  return (
    <Layout location={location}>
      <StaticImage style={imageStyles} src="../images/dev.jpg" alt="Me on my boat" />

      <TypeIt
        style={typeStyles}
        getBeforeInit={(instance) => {
          instance
            .type('Hello world ;)')
            .pause(750)
            .delete()
            .pause(500)
            .type('Welcome to my website!')
            .pause(750)
            .delete()
            .pause(500)

            return instance;
        }} 
        options={{
          waitUntilVisible: true,
          loop: true,
          lifeLike: true,
          cursorChar: "",
        }}
      />
    </Layout>
  )
};

export const Head = () => <Seo title="Home Page" />;

export default HomePage;

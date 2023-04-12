import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Open Sans', 'sans-serif';
  margin-bottom: 35px;
  padding: 0 15px;

  /* Small devices such as large phones (640px and up) */
  @media only screen and (min-width: 40em) {
    padding: 0;
  }

  /* Medium devices such as tablets (768px and up) */
  @media only screen and (min-width: 48em) {
    padding: 0 20px;
  }
`;

const SectionHeader = styled.h2`
  font-family: 'Open Sans', 'sans-serif';
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const BackgroundWrapper = styled.div`
  border-left: #B9B9B9;
  border-left-style: dotted;
`;

interface BackgroundProps {
  children: React.ReactNode;
  header: string;
}

const Background: FC<BackgroundProps> = ({ children, header }) => (
  <Container>
    <SectionHeader>{header}</SectionHeader>

    <BackgroundWrapper>{children}</BackgroundWrapper>
  </Container>
);

export default Background;

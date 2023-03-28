import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Open Sans', 'sans-serif';
  margin-bottom: 35px;
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

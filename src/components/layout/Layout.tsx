import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';
import NavLinks from './NavLinks';
import BurgerMenu from '../burgerMenu/BurgerMenu';

const GlobalStyle = createGlobalStyle`
  html {
    background-color: #0A1828;
    font-size: 16px;
    body {
      margin: 0;
    }
  }
`;

const Container =  styled.div`
  font-family: 'Open Sans', 'sans-serif';
  color: #178582;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .navbar {
    width: 100%;
    color: #178582;
    background-color: #0A1828;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 0; 
    position: sticky;
    top: 0;

    & .nav {
      display: flex;
      align-items: center;
      margin-left: 36px;
    }
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Heading = styled.div`
  font-size: 50px;
  margin: 75px 0 55px 20px;
  color: #BFA181;
  font-family: 'Schibsted Grotesk', 'sans-serif';
`;

const Logo = styled.div`
  font-family: 'Schibsted Grotesk', 'sans-serif';
  font-size: 2rem;
  margin-right: 25px;
  color: #21d2d2;
  text-shadow:
    0 0 5px #21d2d2,
    0 0 10px #21d2d2,
    0 0 20px #21d2d2,
    0 0 40px #178582,
    0 0 80px #178582,
    0 0 90px #178582;

  & .logo-span {
    color: #faca97;
    text-shadow:
      0 0 5px #faca97,
      0 0 10px #faca97,
      0 0 20px #faca97,
      0 0 40px #BFA181,
      0 0 80px #BFA181,
      0 0 90px #BFA181;
  }

  /* Small devices such as large phones (640px and up) */
  @media only screen and (min-width: 40em) {
    font-size: 3rem;
  }
`;

const ButtonWrapper = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: space-around;
`;

interface LayoutProps {
  pageTitle?: string;
  children?: React.ReactNode;
  actionButtons?: React.ReactNode[];
  location?: any;
};

const Layout: FC<LayoutProps> = ({ pageTitle, location, actionButtons, children }) => {
  const { siteTitle } = useSiteMetadata();

  return (
    <Container>
      <div className="navbar">

        <div className="nav">
          <Logo>
            <span className="logo-span">{'<'}</span>
            {`${siteTitle}`}
            <span className="logo-span">{' />'}</span>
          </Logo>

          <NavLinks pathname={location.pathname} />
          
          <BurgerMenu pathname={location.pathname} />
        </div>
      </div>

      <main>
        <GlobalStyle />

        <HeadingWrapper>
          <Heading>{pageTitle}</Heading>

          {actionButtons?.length && actionButtons.map((button: React.ReactNode, index) => <ButtonWrapper key={index}>{button}</ButtonWrapper>) }
        </HeadingWrapper>

        {children}
      </main>
    </Container>
  )
};

export default Layout;

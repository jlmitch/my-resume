import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';

const Container =  styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  font-size: 3rem;
  color: gray;
  font-weight: 700;
  margin: 3rem 0;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;

  & .nav-link-item {
    padding-right: 2rem;

    & .nav-link {
      color: black;
    }
  }
`;

const Heading = styled.h1`
  color: rebeccapurple;
`;

interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode;
};

const Layout: FC<LayoutProps> = ({ pageTitle, children }) => {
  const { siteTitle } = useSiteMetadata();

  return (
    <Container>
      <Header>{siteTitle}</Header>

      <nav>
        <NavLinks>
          <li className="nav-link-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-link-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-link-item">
            <Link className="nav-link" to="/resume">Resume</Link>
          </li>

          <li className="nav-link-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
        </NavLinks>
      </nav>

      <main>
        <Heading>{pageTitle}</Heading>
        
        {children}
      </main>
    </Container>
  )
};

export default Layout;

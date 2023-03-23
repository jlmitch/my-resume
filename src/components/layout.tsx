import React, { FC } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const Container =  styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
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
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Header>{data.site.siteMetadata.title}</Header>
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

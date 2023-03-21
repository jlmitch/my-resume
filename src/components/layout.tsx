import React, { FC } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container =  styled.div`
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;
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
  return (
    <Container>
      <nav>
        <NavLinks>
          <li className="nav-link-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-link-item">
            <Link className="nav-link" to="/about">About</Link>
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

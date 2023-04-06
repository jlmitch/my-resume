import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Links = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 0;

  & .nav-link-item {
    height: 30px;
    width: 90px;
    line-height: 30px;
    text-align: center;

    & .nav-link {
      color: #178582;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;

      &:hover {
        border-bottom: solid 2px #BFA181;
      }

      &.active {
        font-size: 16px;
        color: #BFA181
      },
    }
  }
`;

interface NavLinksProps {
  pathname: string | undefined;
}

const NavLinks = ({ pathname }: NavLinksProps) => {
  return (
    <nav>
      <Links>
        <li className="nav-link-item">
          <Link className={`nav-link ${pathname === '/' ? 'active' : '' }`} to="/">Home</Link>
        </li>

        <li className="nav-link-item">
          <Link className={`nav-link ${pathname === '/about/' ? 'active' : '' }`} to="/about">About</Link>
        </li>

        <li className="nav-link-item">
          <Link className={`nav-link ${pathname === '/resume/' ? 'active' : '' }`} to="/resume">Resume</Link>
        </li>

        <li className="nav-link-item">
          <Link className={`nav-link ${pathname === '/blog/' ? 'active' : '' }`} to="/blog">Blog</Link>
        </li>
      </Links>
    </nav>
  )
};

export default NavLinks;

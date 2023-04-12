import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

interface MenuTrayProps {
  open: boolean;
  pathname: string;
}

const Ul = styled.ul<Omit<MenuTrayProps, 'pathname'>>`
  background-color: #BFA181;
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  list-style: none;
  padding-top: 3.5rem;
  position: fixed;
  right: 0;
  top: -16px;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform 0.3s ease-in-out;
  width: 300px;

  & .nav-link-item {
    padding: 18px 10px;
    & .nav-link {
      color: #178582;
      text-decoration: none;
      text-transform: uppercase;
      font-weight: 700;

      &:hover {
        border-bottom: solid 2px #0A1828;
      }
    }
  }
`;


const MenuTray = ({ open, pathname }: MenuTrayProps) => {
  return (
    <Ul open={open}>
      <li className="nav-link-item">
        <Link className={`nav-link ${pathname === '/' ? 'active' : '' }`} to="/"><span>Home</span></Link>
      </li>
      <li className="nav-link-item">
        <Link className={`nav-link ${pathname === '/about/' ? 'active' : '' }`} to="/about"><span>About</span></Link>
      </li>
      <li className="nav-link-item">
        <Link className={`nav-link ${pathname === '/resume/' ? 'active' : '' }`} to="/resume"><span>Resume</span></Link>
      </li>
      <li className="nav-link-item">
        <Link className={`nav-link ${pathname === '/blog/' ? 'active' : '' }`} to="/blog"><span>Blog</span></Link>
      </li>
    </Ul>
  )
}

export default MenuTray

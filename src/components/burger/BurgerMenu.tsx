import React from 'react';
import { Link } from 'gatsby';
import { stack as Menu } from 'react-burger-menu';
import { burgerMenuStyles } from './burgerMenuStyles';

const BurgerMenu = () => (
  <Menu right styles={burgerMenuStyles}>
    <Link className={`nav-link ${location.pathname === '/' ? 'active' : '' }`} to="/">Home</Link>
    <Link className={`nav-link ${location.pathname === '/about/' ? 'active' : '' }`} to="/about">About</Link>
    <Link className={`nav-link ${location.pathname === '/resume/' ? 'active' : '' }`} to="/resume">Resume</Link>
    <Link className={`nav-link ${location.pathname === '/blog/' ? 'active' : '' }`} to="/blog">Blog</Link>
  </Menu>
);

export default BurgerMenu;

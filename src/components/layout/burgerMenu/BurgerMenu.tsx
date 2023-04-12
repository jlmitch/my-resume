import React, { useState } from 'react';
import styled from 'styled-components';
import MenuTray from './MenuTray';

interface StyledBurgerProps {
  open: boolean;
  onClick: () => void;
}

const StyledBurger = styled.div<StyledBurgerProps>`
  width: 2rem;
  height: 3rem;
  position: fixed;
  top: 25px;
  right: 40px;
  z-index: 20;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;

  /* Small devices such as large phones (640px and up) */
  @media only screen and (min-width: 40em) {
    display: none;
  }
  
  div {
    width: 3rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#0A1828' : '#178582'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;
interface BurgerMenuProps {
  pathname: string;
}

const BurgerMenu = ({ pathname }: BurgerMenuProps) => {
  const [open, setOpen] = useState(false);

  const handleOnclick = () => setOpen(!open);

  return (
    <>
      <StyledBurger data-testid="burger-menu" open={open} onClick={handleOnclick}>
        <div />
        <div />
        <div />
      </StyledBurger>

      <MenuTray open={open} pathname={pathname} />
    </>

  )
};

export default BurgerMenu

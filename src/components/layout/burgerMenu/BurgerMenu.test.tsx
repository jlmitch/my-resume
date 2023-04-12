import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BurgerMenu from './BurgerMenu';

jest.mock('./MenuTray', () => () => <div>Menu Tray</div>);

describe('BurgerMenu', () => {
  test('should display BurgerMenu content', () => {
    const { baseElement } = render(<BurgerMenu pathname="/cats/" />);

    expect(baseElement).toMatchSnapshot();
  });

  test('should match snapshot on click', () => {
    const { baseElement } = render(<BurgerMenu pathname="/cats/" />);

    userEvent.click(screen.getByTestId('burger-menu'));

    expect(baseElement).toMatchSnapshot();
  });
});

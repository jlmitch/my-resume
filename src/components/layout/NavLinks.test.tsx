import React from 'react';
import { render, screen } from '@testing-library/react';
import NavLinks from './NavLinks';

describe('NavLinks', () => {
  test('should display NavLinks content', () => {
    render(
      <NavLinks pathname="/cats/" />
    );

    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Resume')).toHaveAttribute('href', '/resume');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('should render my name', () => {
    render(<Header />);

    expect(screen.getByText('Joshua')).toBeInTheDocument();
    expect(screen.getByText('Mitchell')).toBeInTheDocument();
  });

  test('should render contact info section', () => {
    render(<Header />);

    expect(screen.getByText('(912) 674-3761')).toBeInTheDocument();
    expect(screen.getByText('jlmitchwd@gamil.com')).toBeInTheDocument();
    expect(screen.getByText('www.linkedin.com/in/joshualeemitchell')).toHaveAttribute('href', 'https://www.linkedin.com/in/joshualeemitchell');
  });

  test('should render description', () => {
    render(<Header />);

    expect(screen.getByText(
      'Seeking a challenging frontend software engineer role in an organization where I can make a significant contribution using my talents and skills.'
    )).toBeInTheDocument();
  });
});

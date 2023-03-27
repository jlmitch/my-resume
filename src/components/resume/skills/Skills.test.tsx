import React from 'react';
import { render, screen } from '@testing-library/react';
import Skills from './Skills';

describe('Skills', () => {
  test('should render section title', () => {
    render(<Skills />);

    expect(screen.getByText('skills')).toBeInTheDocument();
  });

  test('should render technical section', () => {
    render(<Skills />);

    expect(screen.getByText('technical:')).toBeInTheDocument();
    expect(screen.getByText(
      'JavaScript / Webpack / React / Redux / Sass / Jest / Enzyme / React Testing Library / Git / HTML / CSS'
    )).toBeInTheDocument();
  });

  test('should render interpersonal section', () => {
    render(<Skills />);

    expect(screen.getByText('interpersonal:')).toBeInTheDocument();
    expect(screen.getByText(
      'Excellent Communicator / Team Player / Dependable / Empathetic / Positive Attitude / Active Listener / Problem Solver / Resilient'
    )).toBeInTheDocument();
  });
});

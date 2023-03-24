import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '.';

jest.mock('../../components/layout/Layout', () => ({children}: any) => <>{children}</>);

describe('AboutPage', () => {
  test('should display AboutPage content', () => {
    render(<AboutPage />);

    expect(screen.getByText('Hi there! I\'m the proud creator of this site, which I built with Gatsby.')).toBeInTheDocument();
  });
});

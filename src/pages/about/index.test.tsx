import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutPage from '.';
import { Head } from '.';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';

jest.mock('../../hooks/siteMetadata/useSiteMetadata');
jest.mock('../../components/layout/Layout', () => ({children}: any) => <>{children}</>);

describe('AboutPage', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'Michael Scott'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should display AboutPage content', () => {
    render(<AboutPage />);

    expect(screen.getByText('Hi there! I\'m the proud creator of this site, which I built with Gatsby.')).toBeInTheDocument();
  });

  test('should display Head content', () => {
    render(<Head />);

    expect(screen.getByText('About Me | Michael Scott')).toBeInTheDocument();
  });
});

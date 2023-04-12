import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '.';
import { Head } from '.';
import { useSiteMetadata } from '../hooks/siteMetadata/useSiteMetadata';

jest.mock('../hooks/siteMetadata/useSiteMetadata');
jest.mock('../components/layout/Layout', () => ({children}: any) => <>{children}</>);

describe('Home Page', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'Michael Scott',
      siteUrl: 'https://michaelscott.com'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test.skip('should display HomePage content', () => {
    render(<IndexPage />);

  });

  test('should display Head content', () => {
    render(<Head />);

    expect(screen.getByText('Home Page | Michael Scott')).toBeInTheDocument();
  });
});

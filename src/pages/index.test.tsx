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
      siteTitle: 'Michael Scott'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should display HomePage content', () => {
    render(<IndexPage />);

    expect(screen.getByText('I\'m making this by following the Gatsby Tutorial.')).toBeInTheDocument();
    expect(screen.getByAltText('Me on my boat')).toBeInTheDocument();
  });

  test('should display Head content', () => {
    render(<Head />);

    expect(screen.getByText('Home Page | Michael Scott')).toBeInTheDocument();
  });
});

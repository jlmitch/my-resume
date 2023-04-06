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
      siteTitle: 'Michael Scott',
      siteUrl: 'https://michaelscott.com'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should display AboutPage content', () => {
    const { asFragment } = render(<AboutPage />);

    expect(asFragment()).toMatchSnapshot();
    expect(screen.getByAltText('Me on my boat')).toBeInTheDocument();
  });

  test('should display Head content', () => {
    render(<Head />);

    expect(screen.getByText('About Me | Michael Scott')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ResumePage from '.';
import { Head } from '.';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';
import type { PageProps } from 'gatsby';

jest.mock('../../hooks/siteMetadata/useSiteMetadata');
jest.mock('../../components/layout/Layout', () => ({children}: any) => <>{children}</>);

describe('ResumePage', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'Michael Scott',
      siteUrl: 'https://michaelscott.com'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test.skip('should display ResumePage content', () => {
    const props: PageProps = {
      location: {pathname: '/resume/'}
    }
    render(<ResumePage {...props}/>);

    // expect(screen.getByText('Download')).toHaveAttribute('href', 'https://drive.google.com/file/d/1ZMutrGhwFRYkFmmEGABwFWemIhl4WDrS/view?usp=share_link');
  });

  test('should display Head content', () => {
    render(<Head />);

    expect(screen.getByText('My Resume | Michael Scott')).toBeInTheDocument();
  });
});

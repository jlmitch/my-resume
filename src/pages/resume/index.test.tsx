import React from 'react';
import { render, screen } from '@testing-library/react';
import ResumePage from '.';
import { Head } from '.';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';

jest.mock('../../hooks/siteMetadata/useSiteMetadata');
jest.mock('../../components/layout/Layout', () => ({children}: any) => <>{children}</>);

describe('ResumePage', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'Michael Scott'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should display ResumePage content', () => {
    render(<ResumePage />);

    expect(screen.getByText('Download')).toHaveAttribute('href', 'https://drive.google.com/file/d/15PC064C00_JqK1lNkCwEqs_WHxiv7i_a/view?usp=share_link');
  });

  test('should display Head content', () => {
    render(<Head />);

    expect(screen.getByText('My Resume | Michael Scott')).toBeInTheDocument();
  });
});

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

    expect(screen.getByText('This will be my downloadable Resume')).toBeInTheDocument();
  });

  test('should display Head content', () => {
    render(<Head />);

    expect(screen.getByText('My Resume | Michael Scott')).toBeInTheDocument();
  });
});

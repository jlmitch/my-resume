import React from 'react';
import { render, screen } from '@testing-library/react';
import Seo from './Seo';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';

jest.mock('../../hooks/siteMetadata/useSiteMetadata');

describe('Seo', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'Michael Scott',
      siteUrl: 'https://michaelscott.com'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should render Seo contents', () => {
    render(<Seo title="Dunder Mifflin" />);

    expect(screen.getByText('Dunder Mifflin | Michael Scott')).toBeInTheDocument();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';

jest.mock('../../hooks/siteMetadata/useSiteMetadata');

describe('Layout', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'Michael Scott'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should display Layout content', () => {
    render(
      <Layout pageTitle="Home Page">
        <div>This is my home page</div>
      </Layout>
    );
    
    expect(screen.getByText('Michael Scott')).toBeInTheDocument();
    expect(screen.getByText('Home')).toHaveAttribute('href', '/');
    expect(screen.getByText('About')).toHaveAttribute('href', '/about');
    expect(screen.getByText('Resume')).toHaveAttribute('href', '/resume');
    expect(screen.getByText('Blog')).toHaveAttribute('href', '/blog');
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByText('This is my home page')).toBeInTheDocument();
  });
});

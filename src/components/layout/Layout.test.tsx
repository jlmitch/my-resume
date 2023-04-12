import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from './Layout';
import { useSiteMetadata } from '../../hooks/siteMetadata/useSiteMetadata';

jest.mock('../../hooks/siteMetadata/useSiteMetadata');
jest.mock('./NavLinks', () => () => <div>Nav Links</div>);
jest.mock('./burgerMenu/BurgerMenu', () => () => <div>Burger Links</div>);

describe('Layout', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'MS',
      siteUrl: 'https://michaelscott.com'
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should display Layout content', () => {
    render(
      <Layout
        pageTitle="Home Page"
        location={{ pathname: '/walmart/'}}
        actionButtons={[
          <a
            href="https://drive.google.com/file/d/1ZMutrGhwFRYkFmmEGABwFWemIhl4WDrS/view?usp=share_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download
          </a>
        ]}
      >
        <div>This is my home page</div>
      </Layout>
    );
    
    expect(screen.getByText('MS')).toBeInTheDocument();
    expect(screen.getByText('Nav Links')).toBeInTheDocument();
    expect(screen.getByText('Burger Links')).toBeInTheDocument();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(screen.getByText('This is my home page')).toBeInTheDocument();
    expect(screen.getByText('Download')).toHaveAttribute('href', 'https://drive.google.com/file/d/1ZMutrGhwFRYkFmmEGABwFWemIhl4WDrS/view?usp=share_link');
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import IndexPage from '.';

jest.mock('../components/layout/Layout', () => ({children}: any) => <>{children}</>);

describe('IndexPage', () => {
  test('should display HomePage content', () => {
    render(<IndexPage />);

    expect(screen.getByText('I\'m making this by following the Gatsby Tutorial.')).toBeInTheDocument();
  });
});

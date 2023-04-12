import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuTray from './MenuTray';

describe('MenuTray', () => {
  test('should display MenuTray content', () => {
    const { baseElement } = render(<MenuTray open={true} pathname="/cats/" />);

    expect(baseElement).toMatchSnapshot();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Background from './Background';

describe('Background', () => {
  test('should render Background contents', () => {
    render(
      <Background header="I am a header">
        <div>I am a child element</div>
      </Background>
    );

    expect(screen.getByText('I am a header')).toBeInTheDocument();
    expect(screen.getByText('I am a child element')).toBeInTheDocument();
  });
});

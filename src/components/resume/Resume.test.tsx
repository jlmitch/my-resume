import React from 'react';
import { render, screen } from '@testing-library/react';
import Resume from './Resume';

jest.mock('./Resume', () => () => <div>This is my resume!</div>);

describe('Resume', () => {
  test('should my resume', () => {
    render(<Resume />);

    expect(screen.getByText('This is my resume!')).toBeInTheDocument();
  });
});

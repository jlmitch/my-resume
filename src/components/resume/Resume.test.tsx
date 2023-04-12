import React from 'react';
import { render } from '@testing-library/react';
import Resume from './Resume';

describe('Resume', () => {
  test('should my resume', () => {
    const { baseElement } = render(<Resume />);
    expect(baseElement).toMatchSnapshot();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ResumePage from '.';

jest.mock('../../components/layout/layout', () => ({children}: any) => <>{children}</>);

describe('ResumePage', () => {
  test('should display ResumePage content', () => {
    render(<ResumePage />);

    expect(screen.getByText('This will be my downloadable Resume')).toBeInTheDocument();
  });
});

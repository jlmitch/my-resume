import { renderHook } from '@testing-library/react';
import { useSiteMetadata } from './useSiteMetadata';

jest.mock('./useSiteMetadata');

describe('useSiteMetadata Hook', () => {
  beforeEach(() => {
    (useSiteMetadata as jest.Mock).mockReturnValue({
      siteTitle: 'Dunder Mifflin',
      siteUrl: 'https://dundermifflin.com'
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get data in success case for site metadata', () => {
    const { result } = renderHook(() => useSiteMetadata());

    expect(result.current.siteTitle).toEqual('Dunder Mifflin');
    expect(result.current.siteUrl).toEqual('https://dundermifflin.com');
  });
});

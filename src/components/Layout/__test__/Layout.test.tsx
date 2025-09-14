import '@testing-library/jest-dom';
import { cleanup, render, screen } from '@testing-library/react';

(global as any).TextEncoder ??= require('util').TextEncoder;
(global as any).TextDecoder ??= require('util').TextDecoder;

let mockPathname = '/';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({ pathname: mockPathname }),
  Outlet: () => <div data-testid="outlet" />,
}));

const headerPropsSpy = jest.fn();

jest.mock('../components/Header', () => ({
  __esModule: true,
  default: (props: any) => {
    headerPropsSpy(props);
    return <div data-testid="header" />;
  },
}));

jest.mock('../components/Footer', () => ({
  __esModule: true,
  Footer: () => <div data-testid="footer" />,
}));

import Layout from '..';

describe('Layout', () => {
  afterEach(() => {
    cleanup();
    headerPropsSpy.mockClear();
  });

  it('mostra o carousel no Header quando pathname é "/"', () => {
    mockPathname = '/';
    render(<Layout />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('outlet')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();

    expect(headerPropsSpy).toHaveBeenCalledWith(expect.objectContaining({ showCarousel: true }));
  });

  it('não mostra o carousel fora da Home', () => {
    mockPathname = '/pokemon/1';
    render(<Layout />);

    expect(headerPropsSpy).toHaveBeenCalledWith(expect.objectContaining({ showCarousel: false }));
  });
});

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import HeaderCarousel from '..';

jest.mock('antd', () => {
  const actual = jest.requireActual('antd');
  return {
    ...actual,
    Carousel: ({ children }: { children: React.ReactNode }) => (
      <div data-testid="ant-carousel">{children}</div>
    ),
  };
});

const testTheme = {
  colors: {
    ash: '#213547',
    misty: '#1f2d3d',
    brock: '#334155',
    white: '#FFFFFF',
  },
} as any;

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={testTheme}>{ui}</ThemeProvider>);
}

describe('HeaderCarousel', () => {
  it('renderiza os títulos', () => {
    renderWithTheme(<HeaderCarousel />);
    expect(screen.getByText(/Ash Ketchum/i)).toBeInTheDocument();
    expect(screen.getByText(/Misty/i)).toBeInTheDocument();
    expect(screen.getByText(/Brock/i)).toBeInTheDocument();
  });

  it('renderiza as descrições', () => {
    renderWithTheme(<HeaderCarousel />);
    expect(screen.getByText(/Treinador determinado e sonhador/i)).toBeInTheDocument();
    expect(screen.getByText(/tipo Água/i)).toBeInTheDocument();
    expect(screen.getByText(/tipo Pedra/i)).toBeInTheDocument();
  });

  it('renderiza as imagens com alt correto', () => {
    renderWithTheme(<HeaderCarousel />);
    expect(screen.getByAltText('Ash Ketchum')).toBeInTheDocument();
    expect(screen.getByAltText('Misty')).toBeInTheDocument();
    expect(screen.getByAltText('Brock')).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import SimpleButton from '..';

const testTheme = {
  colors: {
    button: '#333',
    buttonActive: '#555',
  },
} as any;

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={testTheme}>{ui}</ThemeProvider>);
}
describe('SimpleButton', () => {
  it('renderiza o texto corretamente', () => {
    renderWithTheme(<SimpleButton text="Clique aqui" />);
    expect(screen.getByText(/clique aqui/i)).toBeInTheDocument();
  });

  it('chama onClick quando clicado', () => {
    const mockFn = jest.fn();
    renderWithTheme(<SimpleButton text="Enviar" onClick={mockFn} />);
    fireEvent.click(screen.getByText(/enviar/i));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it('renderiza o ícone quando passado', () => {
    renderWithTheme(<SimpleButton text="Com ícone" icon="/fake-icon.png" />);
    expect(screen.getByAltText('Icon')).toBeInTheDocument();
  });
});

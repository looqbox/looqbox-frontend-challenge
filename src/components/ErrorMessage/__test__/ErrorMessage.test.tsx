import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { ErrorMessage } from '..';

const testTheme = {
  colors: {
    gradient: 'linear-gradient(180deg, #151A37 0%, rgba(21,26,55,0) 100%)',
    border: '#24293F',
    white: '#FFFFFF',
  },
} as any;

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={testTheme}>{ui}</ThemeProvider>);
}
describe('ErrorMessage', () => {
  it('renderiza a mensagem padrão', () => {
    renderWithTheme(<ErrorMessage />);
    expect(screen.getByText(/Ops, pokémon não encontrado!/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Icon pikachu/i)).toBeInTheDocument();
  });

  it('renderiza uma mensagem customizada quando passada via props', () => {
    renderWithTheme(<ErrorMessage message="Erro de conexão" />);
    expect(screen.getByText(/Erro de conexão/i)).toBeInTheDocument();
  });
});

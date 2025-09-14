import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import SearchBar from '..';

const testTheme = {
  colors: {
    border: '#24293F',
  },
} as any;

function renderWithTheme(ui: React.ReactElement) {
  return render(<ThemeProvider theme={testTheme}>{ui}</ThemeProvider>);
}

describe('SearchBar', () => {
  it('renderiza o input com placeholder', () => {
    const mockFn = jest.fn();
    renderWithTheme(<SearchBar onResult={mockFn} />);

    expect(screen.getByPlaceholderText(/pesquisar pokémon/i)).toBeInTheDocument();
  });

  it('atualiza valor quando usuário digita', async () => {
    const mockFn = jest.fn();
    renderWithTheme(<SearchBar onResult={mockFn} />);
    const input = screen.getByPlaceholderText(/pesquisar pokémon/i);

    await userEvent.type(input, 'Pikachu');
    expect(input).toHaveValue('Pikachu');
  });

  it('chama onResult ao pesquisar', async () => {
    const mockFn = jest.fn();
    renderWithTheme(<SearchBar onResult={mockFn} />);
    const input = screen.getByPlaceholderText(/pesquisar pokémon/i);

    await userEvent.type(input, 'Charmander');
    await userEvent.keyboard('{Enter}');

    expect(mockFn).toHaveBeenCalledWith('charmander');
  });
});

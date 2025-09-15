import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Home from './Home';
import { MemoryRouter } from 'react-router-dom';

test('deve permitir digitar e buscar um Pokémon', () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </Provider>
  );

  const input = screen.getByPlaceholderText(/buscar pokémon/i);
  fireEvent.change(input, { target: { value: 'pikachu' } });
  fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

  expect(input).toHaveValue('pikachu');
});

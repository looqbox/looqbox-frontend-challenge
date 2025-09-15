import { render, screen, waitFor } from '@testing-library/react';
import Details from './Details';
import * as api from '../api/pokemonApi';
import { MemoryRouter, Routes, Route } from 'react-router-dom';

jest.spyOn(api, 'getPokemonByName').mockResolvedValue({
  id: 25,
  name: 'pikachu',
  sprites: { front_default: 'pikachu.png' },
  types: [{ type: { name: 'electric' } }],
  height: 4,
  weight: 60,
  abilities: [{ ability: { name: 'static' } }],
  stats: [
    { stat: { name: 'hp' }, base_stat: 35 },
    { stat: { name: 'speed' }, base_stat: 90 },
  ],
});

test('deve exibir detalhes do Pokémon', async () => {
  render(
    <MemoryRouter initialEntries={['/pokemon/pikachu']}>
      <Routes>
        <Route path="/pokemon/:name" element={<Details />} />
      </Routes>
    </MemoryRouter>,
  );

  await waitFor(() => {
    expect(screen.getByText(/pikachu/i)).toBeInTheDocument();
    expect(screen.getByText(/static/i)).toBeInTheDocument();
    expect(screen.getByText(/speed/i)).toBeInTheDocument();
  });
});

import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import DetailsPage from '../views/Details';
import { getPokemonByName } from '../services/PokemonService';

jest.mock('../services/PokemonService');

describe('DetailsPage component', () => {
  test('fetches and displays details of a Pokemon', async () => {
    const mockPokemon = {
      name: 'bulbasaur',
      types: [{ type: { name: 'fairy' }}],
      stats: [{ stat: { name: 'speed' }, base_stat: 90 }],
      abilities: [{ ability: { name: 'static' } }],
      sprites: { other: { ['official-artwork']: { font_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/35.png" } } },
    };

    (getPokemonByName as jest.Mock).mockResolvedValue(mockPokemon);

    const { getByText } = render(
      <MemoryRouter initialEntries={['/details/bulbasaur']}>
        <Routes>
          <Route path="/details/:name" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(getByText('bulbasaur')).toBeInTheDocument();
      expect(getByText('speed')).toBeInTheDocument();
      expect(getByText('static')).toBeInTheDocument();
    });

    expect(getPokemonByName).toHaveBeenCalledWith('bulbasaur');
  });

});

import { describe, it, expect, vi } from 'vitest';
import axios, { type AxiosResponse } from 'axios';
import { getPokemonDetails } from './pokeApi';

vi.mock('axios');

describe('pokeApi service', () => {
  it('should fetch pokemon details correctly', async () => {
    const mockPokemonData = { id: 25, name: 'pikachu' };
    vi.mocked(axios.get).mockResolvedValue({ data: mockPokemonData } as AxiosResponse<
      typeof mockPokemonData
    >);

    const pokemonDetails = await getPokemonDetails('pikachu');

    expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/pikachu');
    expect(pokemonDetails).toEqual(mockPokemonData);
  });
});

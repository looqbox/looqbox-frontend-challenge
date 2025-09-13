import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { PokemonCard } from './PokemonCard';
import type { PokemonListItem } from '../../types/pokemon.types';

describe('PokemonCard component', () => {
  it('should render the pokemon name and correct link', () => {
    const mockPokemon: PokemonListItem = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
    };

    render(
      <MemoryRouter>
        <PokemonCard pokemon={mockPokemon} />
      </MemoryRouter>
    );

    const pokemonName = screen.getByText(/bulbasaur/i);
    expect(pokemonName).toBeInTheDocument();

    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', '/pokemon/1');
  });
});

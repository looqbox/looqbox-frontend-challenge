import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import PokemonList from '../components/PokemonList';
import type { NamedAPIResource, Pokemon } from '../types/pokemon';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

vi.mock('../hooks/data/use-get-pokemon-list-details', () => ({
  useGetPokemonListDetails: vi.fn(),
}));

vi.mock('../components/PokemonCard', () => ({
  default: ({ pokemon }: { pokemon?: Pokemon }) => (
    <div data-testid="pokemon-card">{pokemon ? pokemon.name : 'loading'}</div>
  ),
}));

import { useGetPokemonListDetails } from '../hooks/data/use-get-pokemon-list-details';

const mockUseGetPokemonListDetails = vi.mocked(useGetPokemonListDetails);

describe('PokemonList tests', () => {
  const mockPokemons: NamedAPIResource[] = [
    { name: 'pikachu', url: 'https://pokeapi.co/api/v2/pokemon/25/' },
    { name: 'charizard', url: 'https://pokeapi.co/api/v2/pokemon/6/' },
  ];

  const mockOnPokemonClick = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render a spinner when isListLoading is true', () => {
    mockUseGetPokemonListDetails.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    render(
      <PokemonList
        pokemons={mockPokemons}
        onPokemonClick={mockOnPokemonClick}
        isListLoading={true}
      />
    );

    expect(document.querySelector('.ant-spin')).toBeInTheDocument();
  });

  it('should render error message when isError is true', () => {
    mockUseGetPokemonListDetails.mockReturnValue({
      data: [],
      isLoading: false,
      isError: true,
    });

    render(
      <PokemonList
        pokemons={mockPokemons}
        onPokemonClick={mockOnPokemonClick}
        isListLoading={false}
      />
    );

    expect(
      screen.getByText('Nenhum Pokémon encontrado para essa pesquisa.')
    ).toBeInTheDocument();
  });

  it('should render the pokemons cards list when loaded successfully', () => {
    const mockPokemonData = [
      {
        id: 25,
        name: 'pikachu',
        height: 4,
        weight: 60,
        sprites: {
          front_default: 'pikachu.png',
          other: {
            'official-artwork': { front_default: 'pikachu-artwork.png' },
          },
        },
        types: [{ slot: 1, type: { name: 'electric', url: '' } }],
        stats: [
          { base_stat: 35, stat: { name: 'hp', url: '' } },
          { base_stat: 55, stat: { name: 'attack', url: '' } },
          { base_stat: 40, stat: { name: 'defense', url: '' } },
        ],
      },
      {
        id: 6,
        name: 'charizard',
        height: 17,
        weight: 905,
        sprites: {
          front_default: 'charizard.png',
          other: {
            'official-artwork': { front_default: 'charizard-artwork.png' },
          },
        },
        types: [{ slot: 1, type: { name: 'fire', url: '' } }],
        stats: [
          { base_stat: 78, stat: { name: 'hp', url: '' } },
          { base_stat: 84, stat: { name: 'attack', url: '' } },
          { base_stat: 78, stat: { name: 'defense', url: '' } },
        ],
      },
    ] as Pokemon[];

    mockUseGetPokemonListDetails.mockReturnValue({
      data: mockPokemonData,
      isLoading: false,
      isError: false,
    });

    render(
      <PokemonList
        pokemons={mockPokemons}
        onPokemonClick={mockOnPokemonClick}
        isListLoading={false}
      />
    );

    expect(screen.getAllByTestId('pokemon-card')).toHaveLength(2);
    expect(screen.getByText('pikachu')).toBeInTheDocument();
    expect(screen.getByText('charizard')).toBeInTheDocument();
  });

  it('should call useGetPokemonListDetails with correct pokemons', () => {
    mockUseGetPokemonListDetails.mockReturnValue({
      data: [],
      isLoading: false,
      isError: false,
    });

    render(
      <PokemonList
        pokemons={mockPokemons}
        onPokemonClick={mockOnPokemonClick}
        isListLoading={false}
      />
    );

    expect(mockUseGetPokemonListDetails).toHaveBeenCalledWith(mockPokemons);
  });
});

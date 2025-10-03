import { render, screen, cleanup } from '@testing-library/react'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { PokemonGrid } from '../PokemonGrid'
import type { Pokemon } from '../../api/pokemon'

vi.mock('../PokemonCard', () => ({
  PokemonCard: ({ pokemon }: { pokemon: Pokemon }) => (
    <div data-testid="pokemon-card">{pokemon.name}</div>
  ),
}))

afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

describe('PokemonGrid', () => {
  const mockPokemons = [
    {
      id: 1,
      name: 'bulbasaur',
      height: 7,
      weight: 69,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: { name: 'bulbasaur', url: '' },
      cries: { latest: '', legacy: '' },
    },
    {
      id: 2,
      name: 'ivysaur',
      height: 10,
      weight: 130,
      abilities: [],
      types: [],
      stats: [],
      moves: [],
      sprites: {
        front_default: '',
        other: { 'official-artwork': { front_default: '' } },
        versions: {
          'generation-v': {
            'black-white': { animated: { front_default: '' } },
          },
        },
      },
      species: { name: 'ivysaur', url: '' },
      cries: { latest: '', legacy: '' },
    },
  ]

  it('renders the correct number of PokemonCard components', () => {
    render(<PokemonGrid pokemons={mockPokemons} />)
    expect(screen.getAllByTestId('pokemon-card')).toHaveLength(2)
  })

  it('renders the correct name for each Pokémon', () => {
    render(<PokemonGrid pokemons={mockPokemons} />)
    expect(screen.getByText(/bulbasaur/i)).toBeInTheDocument()
    expect(screen.getByText(/ivysaur/i)).toBeInTheDocument()
  })

  it('does not break when the list of pokémons is empty', () => {
    render(<PokemonGrid pokemons={[]} />)
    expect(screen.queryAllByTestId('pokemon-card')).toHaveLength(0)
  })
})

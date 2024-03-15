import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { PokemonCard } from '@/components/home/pokemon-card'

describe('Pokémon card', () => {
  it('should render', () => {
    const testData = {
      id: 1,
      sprites: {
        other: {
          home: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          },
        },
      },

      name: 'bulbasaur',
      order: 1,

      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        },
        {
          slot: 2,
          type: {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
        },
      ],
    }

    const wrapper = render(
      <MemoryRouter>
        <PokemonCard data={testData} />
      </MemoryRouter>
    )

    const text = wrapper.getByText('bulbasaur')
    expect(text).toBeInTheDocument()
  })

  it('should have a link generated correctly', () => {
    const testData = {
      id: 1,
      sprites: {
        other: {
          home: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          },
        },
      },

      name: 'bulbasaur',
      order: 1,

      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        },
        {
          slot: 2,
          type: {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
        },
      ],
    }

    const wrapper = render(
      <MemoryRouter>
        <PokemonCard data={testData} />
      </MemoryRouter>
    )

    const text = wrapper.getByTestId('pokemon-link')
    expect(text).toHaveAttribute('href', '/pokemon/1')
  })
})

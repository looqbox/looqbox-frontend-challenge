import { expect, test } from 'vitest'

import type { PokedexState, Pokemon } from './pokedex'
import { fetchPokemons, pokedex as pokedexReducer } from './pokedex'

test('should handle fetchPokemons thunk with rejected state', () => {
  const prevState: PokedexState = {
    pokemons: [],
    total: 0,
    nextUrl: null,
    previousUrl: null,
    isLoading: true,
    error: null,
  }

  const action = {
    type: fetchPokemons.rejected.type,
    error: 'Something went wrong',
  }

  const nextState = pokedexReducer(prevState, action)

  expect(nextState).toEqual({
    pokemons: [],
    total: 0,
    nextUrl: null,
    previousUrl: null,
    isLoading: false,
    error: 'Something went wrong',
  })
})

test('should handle fetchPokemons thunk with pending state', () => {
  const prevState: PokedexState = {
    pokemons: [],
    total: 0,
    nextUrl: null,
    previousUrl: null,
    isLoading: true,
    error: null,
  }

  const action = {
    type: fetchPokemons.pending.type,
  }

  const nextState = pokedexReducer(prevState, action)

  expect(nextState).toEqual({
    pokemons: [],
    total: 0,
    nextUrl: null,
    previousUrl: null,
    isLoading: true,
    error: null,
  })
})

test('should handle fetchPokemons thunk with fulfilled state', () => {
  const results: Pokemon[] = [
    {
      id: 1,
      name: 'bulbasaur',
      imageUrl: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg`,
      type: 'grass',
      height: 7,
      weight: 69,
      ability: 'overgrow',
      stats: [
        {
          name: 'hp',
          value: 45,
        },
        {
          name: 'attack',
          value: 49,
        },
        {
          name: 'defense',
          value: 49,
        },
        {
          name: 'special-attack',
          value: 65,
        },
      ],
    },
  ]

  const prevState: PokedexState = {
    pokemons: [],
    total: 0,
    nextUrl: null,
    previousUrl: null,
    isLoading: true,
    error: null,
  }

  const action = {
    type: fetchPokemons.fulfilled.type,
    payload: {
      count: 1,
      next: null,
      previous: null,
      results,
    },
  }

  const nextState = pokedexReducer(prevState, action)

  expect(nextState).toEqual({
    pokemons: results,
    total: 1,
    nextUrl: null,
    previousUrl: null,
    isLoading: false,
    error: null,
  })
})

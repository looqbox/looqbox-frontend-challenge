import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

import { env } from '@/lib/env'

interface ResultList {
  count: number
  next: string | null
  previous: string | null
  results: {
    name: string
    url: string
  }[]
}

export interface Pokemon {
  id: number
  name: string
  imageUrl: string
  type: string
  height: number
  weight: number
  ability: string
  stats: {
    name: string
    value: number
  }[]
}

export interface PokedexState {
  pokemons: Pokemon[]
  total: number
  nextUrl: string | null
  previousUrl: string | null
  isLoading: boolean
  error: string | null
}

const initialState: PokedexState = {
  pokemons: [],
  total: 0,
  nextUrl: null,
  previousUrl: null,
  isLoading: false,
  error: null,
}

async function fetchPokemonDetails(url: string) {
  try {
    const response = await axios.get(url)

    const { id, name, sprites, types, height, weight, abilities, stats } =
      response.data

    const statList = stats.map(
      (stat: { base_stat: number; stat: { name: string } }) => {
        return {
          name: stat.stat.name,
          value: stat.base_stat,
        }
      },
    )

    const pokemon: Pokemon = {
      id,
      name,
      imageUrl: sprites.other.dream_world.front_default,
      type: types[0].type.name || 'unknown',
      height,
      weight,
      ability: abilities[0].ability.name,
      stats: statList,
    }

    return pokemon
  } catch (error) {
    console.error(error)
    throw new Error('Pokémon not found')
  }
}

export const fetchPokemons = createAsyncThunk(
  'pokedex/fetchPokemons',
  async (url?: string) => {
    try {
      const defaultUrl = `${env.VITE_API_URL}/pokemon?offset=0&limit=12`
      const response = await axios.get<ResultList>(url || defaultUrl)

      const { count, next, previous, results } = response.data

      const pokemonList = await Promise.all(
        results.map(async (result) => {
          // Fetch details for each pokemon here in parallel using Promise.all
          const pokemon = await fetchPokemonDetails(result.url)

          return pokemon
        }),
      )

      return { count, next, previous, results: pokemonList }
    } catch (error) {
      console.error(error)
      throw new Error('Failed to fetch Pokémon list')
    }
  },
)

export const searchPokemon = createAsyncThunk(
  'pokedex/searchPokemon',
  async (nameOrCode: string) => {
    try {
      const url = `${env.VITE_API_URL}/pokemon/${nameOrCode.toLowerCase()}`
      const response = await axios.get(url)

      const statList = response.data.stats.map(
        (stat: { base_stat: number; stat: { name: string } }) => {
          return {
            name: stat.stat.name,
            value: stat.base_stat,
          }
        },
      )

      const pokemon: Pokemon = {
        id: response.data.id,
        name: response.data.name,
        imageUrl: response.data.sprites.other.dream_world.front_default,
        type: response.data.types[0].type.name || 'unknown',
        height: response.data.height,
        weight: response.data.weight,
        ability: response.data.abilities[0].ability.name,
        stats: statList,
      }

      return pokemon
    } catch (error) {
      console.error(error)
      return null
    }
  },
)

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.total = action.payload.count
      state.nextUrl = action.payload.next
      state.previousUrl = action.payload.previous
      state.pokemons = action.payload.results
      state.isLoading = false
    })

    builder
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.error = action.error.message || 'Something went wrong'
        state.isLoading = false
      })

      .addCase(searchPokemon.pending, (state) => {
        state.isLoading = true
      })

      .addCase(searchPokemon.fulfilled, (state, action) => {
        state.nextUrl = initialState.nextUrl
        state.previousUrl = initialState.previousUrl

        if (action.payload) {
          state.total = 1
          state.pokemons = [action.payload]
        } else {
          state.total = 0
          state.pokemons = []
        }

        state.isLoading = false
      })

      .addCase(searchPokemon.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message ?? 'Something went wrong'
      })
  },
})

export const pokedex = pokedexSlice.reducer
// export const {  } = pokedexSlice.actions

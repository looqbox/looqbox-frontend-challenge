import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { api } from '../../services/api'

interface PokemonState {
  baseData: PokemonBaseData
  allPokemons: Result[]
  isLoading: boolean
  isSearching: boolean
  searchedPokemon: Result[]
}

type Result = { name: string; url: string }
type PokemonBaseData = {
  count: number
  next?: string
  previous?: string
  results: Result[]
}

const baseData: PokemonBaseData = {
  count: 0,
  next: undefined,
  previous: undefined,
  results: [],
}

const initialState: PokemonState = {
  baseData,
  allPokemons: [],
  isLoading: false,
  searchedPokemon: [],
  isSearching: false,
}

type PaginationParams = {
  limit: number
  offset: number
}

export const loadAllPokemonNames = createAsyncThunk<Result[]>(
  'pokemons/loadAll',
  async () => {
    const response = await api.get<PokemonBaseData>('?limit=1350')

    return response.data.results
  },
)

export const loadPokemonPaginatedList = createAsyncThunk<
  PokemonBaseData,
  PaginationParams
>('pokemons/load', async ({ limit, offset }: PaginationParams) => {
  const response = await api.get<PokemonBaseData>(
    `?limit=${limit}&offset=${offset}`,
  )

  return response.data
})

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    searchByName: (state, action) => {
      const name = action.payload.toLowerCase()
      state.searchedPokemon = state.allPokemons.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(name),
      )
      state.isSearching = true
    },

    resetSearch: (state) => {
      state.searchedPokemon = []
      state.isSearching = false
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadAllPokemonNames.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadAllPokemonNames.fulfilled, (state, action) => {
        state.allPokemons = action.payload
        state.isLoading = false
      })
      .addCase(loadAllPokemonNames.rejected, (state) => {
        state.isLoading = false
      })
      .addCase(loadPokemonPaginatedList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(loadPokemonPaginatedList.fulfilled, (state, action) => {
        state.baseData = action.payload
        state.isLoading = false
      })
      .addCase(loadPokemonPaginatedList.rejected, (state) => {
        state.isLoading = false
      })
  },
})

export const pokemons = pokemonsSlice.reducer
export const { resetSearch, searchByName } = pokemonsSlice.actions

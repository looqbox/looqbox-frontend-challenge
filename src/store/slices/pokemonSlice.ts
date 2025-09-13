import { createSlice, createAsyncThunk, type PayloadAction } from '@reduxjs/toolkit';
import {
  getPokemons,
  getPokemonDetails,
  getAllTypes,
  getAllGenerations,
} from '../../services/pokeApi';
import type { PokemonListItem, PokemonDetails } from '../../types/pokemon.types';

interface ApiResource {
  name: string;
  url: string;
}

interface PokemonState {
  list: PokemonListItem[];
  details: PokemonDetails | null;
  total: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  types: ApiResource[];
  generations: ApiResource[];
  selectedType: string | null;
  selectedGeneration: string | null;
}

const initialState: PokemonState = {
  list: [],
  details: null,
  total: 0,
  status: 'idle',
  error: null,
  types: [],
  generations: [],
  selectedType: null,
  selectedGeneration: null,
};

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const response = await getPokemons(limit, offset);
    return response;
  }
);

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchPokemonDetails',
  async (nameOrId: string) => {
    const response = await getPokemonDetails(nameOrId);
    return response;
  }
);

export const fetchFilterOptions = createAsyncThunk('pokemon/fetchFilterOptions', async () => {
  const [types, generations] = await Promise.all([getAllTypes(), getAllGenerations()]);
  return { types, generations };
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setSelectedType: (state, action: PayloadAction<string | null>) => {
      state.selectedType = action.payload;
    },
    setSelectedGeneration: (state, action: PayloadAction<string | null>) => {
      state.selectedGeneration = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.results;
        state.total = action.payload.count;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch pokemons';
      })
      .addCase(fetchPokemonDetails.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action: PayloadAction<PokemonDetails>) => {
        state.status = 'succeeded';
        state.details = action.payload;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch details';
      })
      .addCase(fetchFilterOptions.fulfilled, (state, action) => {
        state.types = action.payload.types;
        state.generations = action.payload.generations;
      });
  },
});

export const { setSelectedType, setSelectedGeneration } = pokemonSlice.actions;

export default pokemonSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getPokemonList, getPokemonDetails } from '../services/api';
import type { PokemonDetail } from '../types/pokemon';

interface PokemonState {
  list: PokemonDetail[];
  searchResults: PokemonDetail[];
  selectedPokemon: PokemonDetail | null;
  loading: boolean;
  error: string | null;
  count: number;
}

const initialState: PokemonState = {
  list: [],
  searchResults: [],
  selectedPokemon: null,
  loading: false,
  error: null,
  count: 0,
};

export const fetchPokemonList = createAsyncThunk(
  'pokemon/fetchList',
  async ({ limit, offset }: { limit: number; offset: number }) => {
    const listData = await getPokemonList(limit, offset);
    const promises = listData.results.map((item: { name: string }) => getPokemonDetails(item.name));
    const details = await Promise.all(promises);
    return { results: details, count: listData.count };
  },
);

export const fetchPokemonDetails = createAsyncThunk(
  'pokemon/fetchDetails',
  async (nameOrId: string | number) => {
    return await getPokemonDetails(nameOrId);
  },
);

export const searchPokemon = createAsyncThunk(
  'pokemon/search',
  async ({ term, limit, offset }: { term: string; limit: number; offset: number }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1500`);
    const data = await response.json();

    const allMatches = data.results.filter((p: { name: string }) =>
      p.name.includes(term.toLowerCase()),
    );

    const paginatedMatches = allMatches.slice(offset, offset + limit);

    if (allMatches.length === 0) throw new Error('No Pokemon found.');

    const detailPromises = paginatedMatches.map((m: { name: string }) => getPokemonDetails(m.name));
    const details = await Promise.all(detailPromises);

    return {
      results: details,
      totalFound: allMatches.length,
    };
  },
);

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearSelectedPokemon: (state) => {
      state.selectedPokemon = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload.results;
        state.count = action.payload.count;
        state.searchResults = [];
      })

      .addCase(fetchPokemonDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedPokemon = action.payload;
      })

      .addCase(searchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = action.payload.results;
        state.count = action.payload.totalFound;
      })
      .addCase(searchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Search failed';
        state.searchResults = [];
      });
  },
});

export const { clearError, clearSelectedPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;

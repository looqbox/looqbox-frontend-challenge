import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetails, PokemonListItem } from '../../services/pokeapi';
import { fetchPokemonDetails, fetchPokemonPage } from './pokemonThunks';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

type PokemonState = {
  list: PokemonListItem[];
  total: number;
  listStatus: Status;
  listError: string | null;

  detailsByName: Record<string, PokemonDetails>;
  detailsStatusByName: Record<string, Status>;
  detailsErrorByName: Record<string, string | null>;
};

const initialState: PokemonState = {
  list: [],
  total: 0,
  listStatus: 'idle',
  listError: null,

  detailsByName: {},
  detailsStatusByName: {},
  detailsErrorByName: {},
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearListError(state) {
      state.listError = null;
    },
  },
  extraReducers: (builder) => {
    // List
    builder
      .addCase(fetchPokemonPage.pending, (state) => {
        state.listStatus = 'loading';
        state.listError = null;
      })
      .addCase(fetchPokemonPage.fulfilled, (state, action) => {
        state.listStatus = 'succeeded';
        state.total = action.payload.count;
        state.list = action.payload.results;
      })
      .addCase(fetchPokemonPage.rejected, (state, action) => {
        state.listStatus = 'failed';
        state.listError = action.payload ?? 'Failed to fetch pokémon list';
      });

    // Details
    builder
      .addCase(fetchPokemonDetails.pending, (state, action) => {
        const name = action.meta.arg.name.toLowerCase();
        state.detailsStatusByName[name] = 'loading';
        state.detailsErrorByName[name] = null;
      })
      .addCase(fetchPokemonDetails.fulfilled, (state, action: PayloadAction<PokemonDetails>) => {
        const name = action.payload.name.toLowerCase();
        state.detailsByName[name] = action.payload;
        state.detailsStatusByName[name] = 'succeeded';
        state.detailsErrorByName[name] = null;
      })
      .addCase(fetchPokemonDetails.rejected, (state, action) => {
        const name = action.meta.arg.name.toLowerCase();
        state.detailsStatusByName[name] = 'failed';
        state.detailsErrorByName[name] = action.payload ?? 'Failed to fetch pokémon details';
      });
  },
});

export const { clearListError } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;

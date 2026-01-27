import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetails, PokemonIndexItem } from '../../services/pokeapi';
import { fetchPokemonDetails, fetchPokemonIndex } from './pokemonThunks';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

type PokemonState = {
  total: number;
  index: PokemonIndexItem[];
  indexStatus: Status;
  indexError: string | null;

  detailsByName: Record<string, PokemonDetails>;
  detailsStatusByName: Record<string, Status>;
  detailsErrorByName: Record<string, string | null>;
};

const initialState: PokemonState = {
  total: 0,
  index: [],
  indexStatus: 'idle',
  indexError: null,

  detailsByName: {},
  detailsStatusByName: {},
  detailsErrorByName: {},
};

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    clearListError(state) {
      state.indexError = null;
    },
  },
  extraReducers: (builder) => {
    // Index
    builder
      .addCase(fetchPokemonIndex.pending, (state) => {
        state.indexStatus = 'loading';
        state.indexError = null;
      })
      .addCase(fetchPokemonIndex.fulfilled, (state, action) => {
        state.indexStatus = 'succeeded';
        state.index = action.payload;
      })
      .addCase(fetchPokemonIndex.rejected, (state, action) => {
        state.indexStatus = 'failed';
        state.indexError = action.payload ?? 'Failed to fetch pokémon index';
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

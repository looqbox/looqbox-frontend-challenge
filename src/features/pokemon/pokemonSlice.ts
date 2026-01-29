import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { PokemonDetails, PokemonIndexItem } from '../../services/pokeapi';
import {
  fetchPokemonDetails,
  fetchPokemonEvolutionChain,
  fetchPokemonIndex,
  fetchPokemonSpecies,
} from './pokemonThunks';
import type { PokemonSpeciesStored } from './utils/pokemonTransforms';

type Status = 'idle' | 'loading' | 'succeeded' | 'failed';

type PokemonState = {
  total: number;
  index: PokemonIndexItem[];
  indexStatus: Status;
  indexError: string | null;

  detailsByName: Record<string, PokemonDetails>;
  detailsStatusByName: Record<string, Status>;
  detailsErrorByName: Record<string, string | null>;

  speciesByName: Record<string, PokemonSpeciesStored>;
  speciesStatusByName: Record<string, Status>;
  speciesErrorByName: Record<string, string | null>;

  evolutionByName: Record<string, string[]>;
  evolutionStatusByName: Record<string, Status>;
  evolutionErrorByName: Record<string, string | null>;
};

const initialState: PokemonState = {
  total: 0,
  index: [],
  indexStatus: 'idle',
  indexError: null,

  detailsByName: {},
  detailsStatusByName: {},
  detailsErrorByName: {},

  speciesByName: {},
  speciesStatusByName: {},
  speciesErrorByName: {},

  evolutionByName: {},
  evolutionStatusByName: {},
  evolutionErrorByName: {},
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

    // Species
    builder
      .addCase(fetchPokemonSpecies.pending, (state, action) => {
        const key = action.meta.arg.name.toLowerCase();
        state.speciesStatusByName[key] = 'loading';
        state.speciesErrorByName[key] = null;
      })
      .addCase(
        fetchPokemonSpecies.fulfilled,
        (state, action: ReturnType<typeof fetchPokemonSpecies.fulfilled>) => {
          const key = action.meta.arg.name.toLowerCase();
          state.speciesByName[key] = action.payload;
          state.speciesStatusByName[key] = 'succeeded';
          state.speciesErrorByName[key] = null;
        },
      )
      .addCase(fetchPokemonSpecies.rejected, (state, action) => {
        const key = action.meta.arg.name.toLowerCase();
        state.speciesStatusByName[key] = 'failed';
        state.speciesErrorByName[key] = action.payload ?? 'Failed to fetch pokémon species';
      });

    // Evolution chain
    builder
      .addCase(fetchPokemonEvolutionChain.pending, (state, action) => {
        const key = action.meta.arg.name.toLowerCase();
        state.evolutionStatusByName[key] = 'loading';
        state.evolutionErrorByName[key] = null;
      })
      .addCase(
        fetchPokemonEvolutionChain.fulfilled,
        (state, action: ReturnType<typeof fetchPokemonEvolutionChain.fulfilled>) => {
          const key = action.meta.arg.name.toLowerCase();
          state.evolutionByName[key] = action.payload;
          state.evolutionStatusByName[key] = 'succeeded';
          state.evolutionErrorByName[key] = null;
        },
      )
      .addCase(fetchPokemonEvolutionChain.rejected, (state, action) => {
        const key = action.meta.arg.name.toLowerCase();
        state.evolutionStatusByName[key] = 'failed';
        state.evolutionErrorByName[key] = action.payload ?? 'Failed to fetch evolution chain';
      });
  },
});

export const { clearListError } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;

export type { Status };
export type { PokemonState };

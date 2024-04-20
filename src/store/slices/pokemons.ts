import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Pokemon } from '@/@types/pokemon';

export const PER_PAGE = 12;

export type PokemonsState = {
  pageIndex: number;
  totalCount: number;
  perPage: number;
  pageOffset: number;
  pokemons: Pokemon[];
};

const initialState: PokemonsState = {
  pageIndex: 0,
  totalCount: 0,
  perPage: PER_PAGE,
  pageOffset: 0,
  pokemons: [],
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setPokemonsCount(state, action: PayloadAction<[number]>) {
      state.totalCount = action.payload[0];
    },
    addPokemons(state, action: PayloadAction<[Pokemon[]]>) {
      state.pokemons = [...state.pokemons, ...action.payload[0]];
    },
    nextPage(state, action: PayloadAction<[Pokemon[]]>) {
      state.pageIndex += 1;
      state.pageOffset = state.pageIndex * state.perPage;
      const nextPagePokemons = action.payload[0];

      const comparePokemonsList = nextPagePokemons.every((pokemon) =>
        state.pokemons.includes(pokemon)
      );

      if (!comparePokemonsList) {
        state.pokemons = [...state.pokemons, ...nextPagePokemons];
      }
    },
  },
});

export const pokemons = pokemonsSlice.reducer;

export const { setPokemonsCount, addPokemons, nextPage } =
  pokemonsSlice.actions;

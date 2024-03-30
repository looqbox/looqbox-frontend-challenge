import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon, PokemonList } from './types';

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    pokemonList: {} as PokemonList,
    pokemonFavorites: {
      count: 0,
      next: null,
      previous: null,
      results: [] as Pokemon[]
    },
    pokemonDetail: {} as Pokemon
  },
  reducers: {
    setList: (state, action: PayloadAction<PokemonList>) => {
      state.pokemonList = action.payload;
    },
    setPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonDetail = action.payload;
    },
    removePokemon: (state) => {
      state.pokemonDetail = {} as Pokemon;
    },
    addFavorite: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonFavorites.results.push(action.payload);
      state.pokemonFavorites.count = state.pokemonFavorites.count + 1;

    },
    removeFavorite: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonFavorites.results = state.pokemonFavorites.results.filter((pokemon) => pokemon.id !== action.payload.id);
      state.pokemonFavorites.count = state.pokemonFavorites.count - 1;
    }
  }
});

export const { setList, setPokemon, removePokemon, addFavorite, removeFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;
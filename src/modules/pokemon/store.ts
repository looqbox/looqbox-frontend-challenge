import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Pokemon, PokemonList } from './types';

const initialState = {
  pokemonList: {} as PokemonList,
  pokemonFavorites: {
    count: 0,
    results: [] as Pokemon[]
  },
  pokemonDetail: {} as Pokemon
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
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
      const exists = state.pokemonFavorites.results.find((pokemon) => pokemon.id === action.payload.id);
      if(exists) return;

      const newFavorites = [...state.pokemonFavorites.results, action.payload];

      state.pokemonFavorites.results = newFavorites;
      state.pokemonFavorites.count = newFavorites.length;
    },
    removeFavorite: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonFavorites.results = state.pokemonFavorites.results.filter((pokemon) => pokemon.id !== action.payload.id);
      state.pokemonFavorites.count = state.pokemonFavorites.count - 1;
    }
  }
});

export const { setList, setPokemon, removePokemon, addFavorite, removeFavorite } = pokemonSlice.actions;
export default pokemonSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import pokemonReducer from '@modules/pokemon/store';

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer
  }
});
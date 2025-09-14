import { configureStore } from '@reduxjs/toolkit';
import pokedex from './slices/pokedexSlice';

export const store = configureStore({
  reducer: { pokedex },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

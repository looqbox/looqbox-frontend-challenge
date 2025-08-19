import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./features/favoritesSlice";
import { pokemonApi } from "./features/pokeapi";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (gDM) => gDM().concat(pokemonApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

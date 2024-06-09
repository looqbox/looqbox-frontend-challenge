import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "@/store/slices/pokemonSlice";

const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;

export default store;

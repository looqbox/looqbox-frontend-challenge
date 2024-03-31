import { configureStore, combineReducers } from "@reduxjs/toolkit";
import pokemonSlice from "./pokemonSlicer";

const rootReducer = combineReducers({
  pokemon: pokemonSlice,
});

const setupStore = (preloadedState?: Partial<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore;

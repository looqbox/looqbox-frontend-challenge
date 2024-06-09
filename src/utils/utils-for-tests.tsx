import { RenderOptions, render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { pokemonSlice } from "@/store/slices/pokemonSlice";
import { MemoryRouter } from "react-router-dom";
import React, { PropsWithChildren } from "react";
import { RootState, AppStore } from "@/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  extendedRenderOptions: ExtendedRenderOptions = {}
) {
  const {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = configureStore({
      reducer: { pokemons: pokemonSlice.reducer },
      preloadedState,
    }),
    ...renderOptions
  } = extendedRenderOptions;

  const Wrapper = ({ children }: PropsWithChildren) => (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  );

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}

// export function renderWithProviders(
//   ui: React.ReactNode,
//   {
//     preloadedState = initialState,
//     // Automatically create a store instance if no store was passed in
//     store = configureStore({
//       reducer: { pokemons: pokemonsReducer },
//       preloadedState,
//     }),
//     ...renderOptions
//   } = {}
// ) {
//   function Wrapper({ children }) {
//     return (
//       <MemoryRouter>
//         <Provider store={store}>{children}</Provider>
//       </MemoryRouter>
//     );
//   }

//   // Return an object with the store and all of RTL's query functions
//   return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
// }

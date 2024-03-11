import { createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../models/Pokemon";

interface PokemonState {
  pokemonList: Pokemon[];
  loading: boolean;
  error: string | null;
}

const initialState: PokemonState = {
  pokemonList: [],
  loading: false,
  error: null,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList(state, action) {
      state.pokemonList = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setPokemonList, setLoading, setError } = pokemonSlice.actions;
export default pokemonSlice.reducer;
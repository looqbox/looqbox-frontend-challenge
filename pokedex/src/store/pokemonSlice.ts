import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import type { PokemonState } from "./types.interfaces";
import { fetchPokemon, fetchPokemonList } from "../services/pokemonApi";

const initialState: PokemonState = {
  pokemonList: [],
  searchResults: [],
  loading: false,
  error: null,
  currentPage: 1,
  totalCount: 0,
};

export const loadPokemonList = createAsyncThunk(
  "pokemon/loadPokemonList",
  async ({ offset, limit }: { offset: number; limit: number }) => {
    return await fetchPokemonList(offset, limit);
  },
);

export const searchPokemon = createAsyncThunk(
  "pokemon/searchPokemon",
  async (query: string) => {
    return await fetchPokemon(query);
  },
);

const PokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.searchResults = [];
      state.error = null;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadPokemonList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPokemonList.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemonList = action.payload.results;
        state.totalCount = action.payload.count;
      })
      .addCase(loadPokemonList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load Pokemon list";
      })
      .addCase(searchPokemon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.searchResults = [action.payload];
      })
      .addCase(searchPokemon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Pokemon not found";
        state.searchResults = [];
      });
  },
});

export const { clearSearch, setCurrentPage } = PokemonSlice.actions;
export default PokemonSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk(
  "fetchPokemons",
  async (offset: number) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`,
    );
    const response = await data.json();
    const pokemonsList = response.results.map(
      (character: { name: string; url: string }) => {
        const [pokemonId] = character.url.split("/").slice(-2, -1);

        return {
          ...character,
          id: pokemonId,
        };
      },
    );

    const payload = {
      pokemonsList,
      count: response.count,
    };

    return payload;
  },
);

export const searchPokemon = createAsyncThunk(
  "searchPokemon",
  async (term: string) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${term}`);

    const pokemonInfo = await data.json();
    console.log(pokemonInfo);

    return pokemonInfo;
  },
);

const pokemonSlice = createSlice({
  /* eslint-disable no-param-reassign */
  name: "pokemon",
  initialState: {
    loading: false,
    data: [],
    error: "",
    numTotalResults: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload.pokemonsList;
        state.numTotalResults = action.payload.count;
        state.error = "";
      })
      .addCase(fetchPokemons.rejected, (state) => {
        state.loading = false;
        state.error = "Sorry, an error occured. Try again!";
        state.numTotalResults = 0;
      })
      .addCase(searchPokemon.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(searchPokemon.fulfilled, (state, action) => {
        state.loading = false;
        state.data = [action.payload];
        state.numTotalResults = 1;
        state.error = "";
      })
      .addCase(searchPokemon.rejected, (state) => {
        state.loading = false;
        state.error = "No pokemon found. Try again!";
        state.numTotalResults = 0;
      });
  },
});

export default pokemonSlice;

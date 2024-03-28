import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPokemons = createAsyncThunk(
  "fetchPokemons",
  async (offset: number) => {
    const data = await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`,
    );
    const response = await data.json();

    console.log(response);

    const pokemonsList = response.results.map(
      (character: { name: string; url: string }) => {
        const [pokemonId] = character.url.split("/").slice(-2, -1);
        console.log(pokemonId);

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
      });
  },
});

export default pokemonSlice;

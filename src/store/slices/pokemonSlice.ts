import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "@/api/client";
import { PokeAPIPokemon, PokeAPIResourceResponse } from "@/@types/Pokemon";

export interface PokemonState {
  list: {
    items: Array<PokeAPIPokemon>;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
    next: string | null;
    filter: string;
  };
}

export const initialState: PokemonState = {
  list: {
    items: [],
    status: "idle",
    error: null,
    next: null,
    filter: "",
  },
};

export const getPokemon = createAsyncThunk("pokemon/getPokemon", async () => {
  const response = await client.get<PokeAPIResourceResponse>(
    "/pokemon?limit=50"
  );

  const requests = response.results.map((item) =>
    client.get<PokeAPIPokemon>(`/pokemon/${item.name}`)
  );

  const list = await Promise.all(requests);

  return {
    items: list,
    next: response.next,
  };
});

export const appendMorePokemon = createAsyncThunk(
  "pokemon/appendMorePokemon",
  async (next: string | null) => {
    console.log("appendMore - ", next);

    if (!next) {
      return;
    }

    const url = next.split("?");
    if (url.length < 2) {
      return;
    }

    const response = await client.get<PokeAPIResourceResponse>(
      `/pokemon?${url[1]}`
    );

    const requests = response.results.map((item) =>
      client.get<PokeAPIPokemon>(`/pokemon/${item.name}`)
    );

    const list = await Promise.all(requests);
    console.log("list: ", list);

    return {
      items: list,
      next: response.next,
    };
  }
);

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.list.filter = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPokemon.pending, (state) => {
        state.list.status = "loading";
      })
      .addCase(getPokemon.fulfilled, (state, action) => {
        state.list.status = "succeeded";
        state.list.items = action.payload.items;
        state.list.next = action.payload.next;
      })
      .addCase(getPokemon.rejected, (state, action) => {
        state.list.status = "failed";
        state.list.error =
          action.error.message || `Unknown error - ${action.error}`;
      })
      .addCase(appendMorePokemon.pending, (state) => {
        state.list.status = "loading";
      })
      .addCase(appendMorePokemon.fulfilled, (state, action) => {
        if (!action.payload?.items) {
          return;
        }
        state.list.status = "succeeded";
        state.list.items = [...state.list.items, ...action.payload.items];
        state.list.next = action.payload.next;
      })
      .addCase(appendMorePokemon.rejected, (state, action) => {
        state.list.status = "failed";
        state.list.error =
          action.error.message || `Unknown error = ${action.error}`;
      });
  },
});

export const { changeFilter } = pokemonSlice.actions;

export default pokemonSlice.reducer;

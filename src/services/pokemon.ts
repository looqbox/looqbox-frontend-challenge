import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Pokemon, { ReferenceToEndpoint } from "../models/pokemon.model";

type APIResponse = {
  count: number;
  next: string;
  previous: string;
  results: ReferenceToEndpoint[];
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<APIResponse, string | null>({
      query: (queryParams) =>
        queryParams ? `pokemon?${queryParams}` : `pokemon`,
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonListQuery } = pokemonApi;

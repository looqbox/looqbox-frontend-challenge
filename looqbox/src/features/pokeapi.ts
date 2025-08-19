import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type Paged = {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
};
type Pokemon = {
  id: number;
  name: string;
  sprites: { other?: { ["official-artwork"]?: { front_default?: string } } };
  types: { slot: number; type: { name: string; url: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string } }[];
};

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  tagTypes: ["Pokemon", "List"],
  endpoints: (builder) => ({
    getPokemonList: builder.query<Paged, { offset: number; limit: number }>({
      query: ({ offset, limit }) => `pokemon?offset=${offset}&limit=${limit}`,
      providesTags: ["List"],
    }),
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name.toLowerCase()}`,
      providesTags: (_r, _e, name) => [{ type: "Pokemon", id: name.toLowerCase() }],
    }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonByNameQuery } = pokemonApi;

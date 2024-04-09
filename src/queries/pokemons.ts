import { useQuery } from "@tanstack/react-query";

import { getPokemon, getPokemons, getPokemonTypes } from "@/services/pokemons";

export const useGetPokemonTypes = () => {
  return useQuery({
    queryKey: ["pokemon-types"],
    queryFn: async () => {
      return getPokemonTypes();
    },
  });
};

export const useGetPokemons = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: async () => {
      return getPokemons();
    },
  });
};

export const useGetPokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: async () => {
      return getPokemon(id);
    },
  });
};

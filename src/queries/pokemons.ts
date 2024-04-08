import { useQuery } from "@tanstack/react-query";

import { getPokemonTypes } from "@/services/pokemons";

export const useGetPokemonTypes = () => {
  return useQuery({
    queryKey: ["pokemon-types"],
    queryFn: async () => {
      return getPokemonTypes();
    },
  });
};

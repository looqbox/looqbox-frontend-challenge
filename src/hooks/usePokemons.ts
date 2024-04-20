// usePokemons.ts
import { getPokemons } from "../core/usecases/Pokemons/getPokemons";
import { NamedAPIResource } from "../core/models/Pokemon";
import { useQuery } from "@tanstack/react-query";

export const usePokemons = (
  pokemonsUrl: NamedAPIResource[],
  page: number = 1
) => {
  const fetchPokemons = async () => {
    const pokemons = await getPokemons(pokemonsUrl);

    return pokemons;
  };

  console.log(pokemonsUrl);

  const {
    data: pokemons,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemons", page, pokemonsUrl],
    queryFn: fetchPokemons,
  });

  return { pokemons, isLoading, error };
};

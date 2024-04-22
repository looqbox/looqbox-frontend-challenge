import { useQuery } from "@tanstack/react-query";
import getPokemon from "../core/usecases/Pokemons/getPokemon";

function usePokemon(name: string) {
  const {
    data: pokemon,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["pokemon", name],
    queryFn: () => getPokemon(name),
  });

  return { pokemon, isLoading, error };
}

export default usePokemon;

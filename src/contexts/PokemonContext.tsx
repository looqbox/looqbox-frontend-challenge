import { fetchPokemonList } from "@/api/fetch-pokemon-list";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export interface PokemonList {
  name: string;
  url: string;
}

interface PokemonContextType {
  pokemons?: PokemonList[] | null;
  total?: number | null;
  handleSearchPokemonByName: (input: string) => void;
}

const PokemonContext = createContext({} as PokemonContextType);

export function PokemonContextProvider({ children }: { children: ReactNode }) {
  const { data, isError } = useQuery({
    queryFn: fetchPokemonList,
    queryKey: ["fetch-list"],
  });

  const pokemons = data?.results;

  const [visiblePokemons, setVisiblePokemons] = useState<PokemonList[] | null>(
    []
  );

  useEffect(() => {
    if (isError) setVisiblePokemons(null);
    if (pokemons) setVisiblePokemons(pokemons);
  }, [pokemons, isError]);

  const handleSearchPokemonByName = useCallback(
    (input: string) => {
      if (pokemons) {
        setVisiblePokemons(
          pokemons?.filter((pokemon) => {
            return pokemon.name.includes(input);
          })
        );
      }
    },
    [pokemons]
  );

  const total = visiblePokemons && visiblePokemons.length;

  return (
    <PokemonContext.Provider
      value={{ pokemons: visiblePokemons, total, handleSearchPokemonByName }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePokemons = () => useContext(PokemonContext);

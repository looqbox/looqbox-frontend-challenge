import { fetchPokemonList } from "@/api/fetch-pokemon-list";
import { useQuery } from "@tanstack/react-query";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export interface PokemonList {
  name: string;
  url: string;
}

interface PokemonContextType {
  pokemons: PokemonList[] | undefined;
  total: number | undefined;
}

const PokemonContext = createContext({} as PokemonContextType);

export function PokemonContextProvider({ children }: { children: ReactNode }) {
  const { data } = useQuery({
    queryFn: () => fetchPokemonList(),
    queryKey: ["fetch-list"],
  });

  const pokemons = data?.results;
  const total = data?.count;

  const [visiblePokemons, setVisiblePokemons] = useState<PokemonList[]>([]);

  useEffect(() => {
    if (pokemons) setVisiblePokemons(pokemons);
  }, [pokemons]);

  return (
    <PokemonContext.Provider value={{ pokemons: visiblePokemons, total }}>
      {children}
    </PokemonContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const usePokemons = () => useContext(PokemonContext);

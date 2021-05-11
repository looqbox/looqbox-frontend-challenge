import { createContext, useState, useContext } from "react";

export const listPageContext = createContext({});

export default function ListPageProvider({ children }: any) {
  const [pokemonOffSet, setPokemonOffSet] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  return (
    <listPageContext.Provider
      value={
        { pokemonOffSet, setPokemonOffSet, pokemonList, setPokemonList } as any
      }
    >
      {children}
    </listPageContext.Provider>
  );
}

export function useListPageContext() {
  const context = useContext(listPageContext);
  const { pokemonOffSet, setPokemonOffSet, pokemonList, setPokemonList }: any =
    context;
  return { pokemonOffSet, setPokemonOffSet, pokemonList, setPokemonList };
}

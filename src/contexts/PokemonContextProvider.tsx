import React, { createContext, useState } from "react";
import { NamedAPIResource } from "../core/models/Pokemon";

interface Props {
  children: React.ReactNode;
}

interface PokemonContextInterface {
  pokemonsUrls: NamedAPIResource[] | [];
  setPokemonsUrls: React.Dispatch<
    React.SetStateAction<NamedAPIResource[] | []>
  >;
}

const PokemonContext = createContext<PokemonContextInterface | null>(null);

function PokemonContextProvider({ children }: Props) {
  const [pokemonsUrls, setPokemonsUrls] = useState<NamedAPIResource[]>([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonsUrls,
        setPokemonsUrls,
      }}>
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonContextProvider, PokemonContext };

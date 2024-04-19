import React, { createContext, useState } from "react";
import Pokemon, { NamedAPIResource } from "../core/models/Pokemon";

interface Props {
  children: React.ReactNode;
}

interface PokemonContextInterface {
  pokemonsUrls: NamedAPIResource[] | [];
  setPokemonsUrls: React.Dispatch<
    React.SetStateAction<NamedAPIResource[] | []>
  >;
  pokemons: Pokemon[] | [];
  setPokemons: React.Dispatch<React.SetStateAction<Pokemon[] | []>>;
}

const PokemonContext = createContext<PokemonContextInterface>({
  pokemonsUrls: [],
  setPokemonsUrls: () => {},
  pokemons: [],
  setPokemons: () => {},
});

function PokemonContextProvider({ children }: Props) {
  const [pokemonsUrls, setPokemonsUrls] = useState<NamedAPIResource[] | []>([]);
  const [pokemons, setPokemons] = useState<Pokemon[] | []>([]);

  return (
    <PokemonContext.Provider
      value={{
        pokemonsUrls,
        setPokemonsUrls,
        pokemons,
        setPokemons,
      }}>
      {children}
    </PokemonContext.Provider>
  );
}

export { PokemonContextProvider, PokemonContext };

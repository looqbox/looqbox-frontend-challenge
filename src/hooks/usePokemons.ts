// usePokemons.ts
import { useEffect, useContext } from "react";
import { getPokemons } from "../core/usecases/Pokemons/getPokemons";
import { PokemonContext } from "../contexts/PokemonContextProvider";
import { NamedAPIResource } from "../core/models/Pokemon";

export const usePokemons = (pokemonsUrl: NamedAPIResource[]) => {
  const { pokemons, setPokemons } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemons = await getPokemons(pokemonsUrl);
      setPokemons(pokemons);
    };

    fetchPokemons();
  }, [pokemonsUrl]);

  return pokemons;
};

import { useState, useEffect, useContext } from "react";
import { getPokemonsUrl } from "../core/usecases/Pokemons/getPokemonsUrl";
import { PokemonContext } from "../contexts/PokemonContextProvider";

export const usePokemonsUrl = (page: number) => {
  const [totalPages, setTotal] = useState(1);

  const { pokemonsUrls, setPokemonsUrls } = useContext(PokemonContext);

  useEffect(() => {
    const fetchPokemonUrls = async () => {
      const response = await getPokemonsUrl(
        `https://pokeapi.co/api/v2/pokemon?offset=${(page - 1) * 20}&limit=20`
      );

      setPokemonsUrls(response.results);
      setTotal(response.count);
    };

    fetchPokemonUrls();
  }, [page]);

  return { totalPages, pokemonsUrls };
};

import { useState } from "react";
import { Pokemon } from "../interfaces/pokemon.model";
import { Pokemons } from "../interfaces/pokemons.mode";
import { popularPokemons } from "../types";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [pokemonDescription, setPokemonDescription] = useState<any | null>();
  const [pokemonSpecie, setPokemonSpecie] = useState<any | null>();
  const [initialPokemons, setInitialPokemons] = useState<Pokemon[]>([]);
  const [pokemonNames, setPokemonNames] = useState<
    {
      value: string;
      label?: string;
    }[]
  >([]);
  const [loadingPokemon, setLoadingPokemon] = useState<boolean>(false);
  const [loadingPokemonNames, setLoadingPokemonNames] =
    useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [weaknesses, setWeaknesses] = useState<any | null>();

  const fetchTypesPokemonById = async (id: number) => {
    try {
      setLoadingPokemonNames(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon names");
      }
      const data = await response.json();

      setPokemonSpecie(data);

      setError(null);
    } catch (error: any) {
      setPokemonSpecie([]);
      setError(error.message);
    } finally {
      setLoadingPokemonNames(false);
    }
  };

  const fetchPokemonByName = async (name: string) => {
    try {
      setLoadingPokemon(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error("Pokemon not found!");
      }
      const data = await response.json();

      setPokemon(data);
      setError(null);
    } catch (error: any) {
      setPokemon(null);
      setError(error.message);
    } finally {
      setLoadingPokemon(false);
    }
  };

  const fetchPokemonNames = async () => {
    try {
      setLoadingPokemonNames(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?limit=1302`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon names");
      }
      const data = await response.json();

      let names: {
        value: string;
        label?: string;
      }[] = [];

      data?.results?.forEach((pokemon: any) => {
        names.push({
          value: pokemon?.name,
          label: pokemon?.name.charAt(0).toUpperCase() + pokemon?.name.slice(1),
        });
      });

      setPokemonNames(names);

      setError(null);
    } catch (error: any) {
      setPokemonNames([]);
      setError(error.message);
    } finally {
      setLoadingPokemonNames(false);
    }
  };

  const fetchPopularPokemons = async () => {
    try {
      const fetchPokemonDataPromises = popularPokemons.map(
        async (pokemonName) => {
          try {
            const pokemonResponse = await fetch(
              `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
            );
            if (!pokemonResponse.ok) {
              throw new Error("Pokemon not found!");
            }
            const pokemonData = await pokemonResponse.json();
            return pokemonData;
          } catch (error) {
            console.error(`Error fetching data for ${pokemonName}`, error);
            return null;
          }
        }
      );

      const fetchedPokemonData = await Promise.all(fetchPokemonDataPromises);
      const filteredPokemonData = fetchedPokemonData.filter(
        (data) => data !== null
      ) as Pokemon[];

      setInitialPokemons(filteredPokemonData);
      setError(null);
    } catch (error: any) {
      setInitialPokemons([]);
      setError(error.message);
    } finally {
      setLoadingPokemonNames(false);
    }
  };

  const fetchCharacteristicPokemonById = async (id: number) => {
    try {
      setLoadingPokemonNames(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/characteristic/${id}/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon names");
      }
      const data = await response.json();

      setPokemonDescription(data);

      setError(null);
    } catch (error: any) {
      setPokemonDescription([]);
      setError(error.message);
    } finally {
      setLoadingPokemonNames(false);
    }
  };

  const fetchSpeciePokemonById = async (id: number) => {
    try {
      setLoadingPokemonNames(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon names");
      }
      const data = await response.json();

      setPokemonSpecie(data);

      setError(null);
    } catch (error: any) {
      setPokemonSpecie([]);
      setError(error.message);
    } finally {
      setLoadingPokemonNames(false);
    }
  };

  return {
    fetchPokemonByName,
    fetchPokemonNames,
    fetchPopularPokemons,
    pokemon,
    setPokemon,
    initialPokemons,
    pokemonNames,
    loadingPokemon,
    loadingPokemonNames,
    error,
    fetchCharacteristicPokemonById,
    pokemonDescription,
    fetchSpeciePokemonById,
    pokemonSpecie,
  };
};

export default usePokemon;

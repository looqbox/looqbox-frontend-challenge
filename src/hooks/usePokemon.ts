import { useState } from "react";
import { Pokemon } from "../interfaces/pokemon.model";
import { PokemonSpecie } from "../interfaces/pokemon-specie.model";
import { PokemonCharacteristic } from "../interfaces/pokemon-characteristic.model";

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>();
  const [pokemonList, setPokemonList] = useState<Pokemon[] | null>();
  const [pokemonNames, setPokemonNames] = useState<
    {
      value: string;
      label?: string;
    }[]
  >([]);

  const [pokemonCharacteristic, setPokemonCharacteristic] =
    useState<PokemonCharacteristic | null>();

  const [pokemonSpecie, setPokemonSpecie] = useState<PokemonSpecie | null>();

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPokemonByName = async (name: string) => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  const fetchPokemonNames = async () => {
    try {
      setLoading(true);
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
      setLoading(false);
    }
  };

  const fetchPokemonCharacteristicById = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/characteristic/${id}/`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon characteristic");
      }
      const data = await response.json();

      setPokemonCharacteristic(data);
      setError(null);
    } catch (error: any) {
      setPokemonCharacteristic(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchSpeciePokemonById = async (id: number) => {
    try {
      setLoading(true);
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
      setPokemonSpecie(null);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchPokemonsList = async (offset: number) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=15`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch Pokemon list");
      }
      const data = await response.json();

      const pokemonNames = data.results.map((pokemon: any) => pokemon.name);

      const fetchPokemonDataPromises = pokemonNames.map(
        async (pokemonName: string) => {
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

      setPokemonList(filteredPokemonData);
      setError(null);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchPokemonNames,
    pokemonNames,
    fetchPokemonByName,
    setPokemon,
    pokemon,
    fetchPokemonCharacteristicById,
    pokemonCharacteristic,
    fetchSpeciePokemonById,
    pokemonSpecie,
    fetchPokemonsList,
    pokemonList,
    loading,
    error,
  };
};

export default usePokemon;

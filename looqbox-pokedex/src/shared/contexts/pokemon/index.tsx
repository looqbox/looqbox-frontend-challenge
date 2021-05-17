import React, { useCallback, createContext, useState, useContext } from 'react';
import { api } from 'shared/services/api';

import { IPokemon } from 'shared/DTOs/pokemon';
import { PokeContextData, PokeProviderProps, PokesData } from './types';

const PokeContext = createContext<PokeContextData>({} as PokeContextData);

const PokeProvider = ({ children }: PokeProviderProps) => {
  const [pokes, setPokes] = useState<PokesData[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loadingPokes, setLoadingPokes] = useState<boolean>(false);
  const [pokemonNotFound, setPokemonNotFound] = useState<boolean>(false);
  const [singlePokemon, setSinglePokemon] = useState<IPokemon | null>(null);
  const [pokemonSpecie, setPokemonSpecie] = useState<any>();
  const [evolutionChain, setEvolutionChain] = useState<any>();

  const getPokes = useCallback(async (page: number) => {
    setLoadingPokes(true);

    const response = await api.get(`pokemon/?offset=${page * 20}&limit=20`);

    setPokes(prevState => {
      return [...prevState, ...response.data.results];
    });

    setLoadingPokes(false);
  }, []);

  const getSinglePokeData = useCallback(async url => {
    const pokemonResponse = await api.get(url);

    return pokemonResponse?.data;
  }, []);

  const getPokemonSpecie = useCallback(async url => {
    const response = await api.get(url);

    setPokemonSpecie(response.data);
  }, []);

  const getEvolutionChain = useCallback(async url => {
    const response = await api.get(url);

    setEvolutionChain(response.data);
  }, []);

  const searchForASinglePokemon = useCallback(async pokemon => {
    setPokemonNotFound(false);

    try {
      const response = await api.get(`pokemon/${pokemon}`);

      if (!response?.data?.id) {
        setPokemonNotFound(true);
        return;
      }

      setSinglePokemon(response.data);
    } catch (error) {
      setPokemonNotFound(true);
    }
  }, []);

  const cleanSearchValue = useCallback(() => {
    setSinglePokemon(null);
    setPokemonNotFound(false);
  }, []);

  return (
    <PokeContext.Provider
      value={{
        getPokes,
        setCurrentPage,
        cleanSearchValue,
        getSinglePokeData,
        getEvolutionChain,
        getPokemonSpecie,
        searchForASinglePokemon,
        pokemonSpecie,
        evolutionChain,
        pokemonNotFound,
        singlePokemon,
        loadingPokes,
        currentPage,
        pokes,
      }}
    >
      {children}
    </PokeContext.Provider>
  );
};

function usePokemon(): PokeContextData {
  const context = useContext(PokeContext);

  if (!context) {
    throw new Error('usePokemon must be used within an PokeProvider');
  }

  return context;
}

export { PokeProvider, usePokemon };

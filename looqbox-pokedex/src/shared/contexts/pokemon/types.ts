/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';
import { IPokemon, IPokeSpecie } from 'shared/DTOs/pokemon';

export interface PokeContextData {
  getSinglePokeData: (url: string) => Promise<IPokemon>;
  searchForASinglePokemon: (pokeName: string) => Promise<void>;
  getPokemonSpecie: Function;
  getEvolutionChain: Function;
  pokemonNotFound: boolean;
  setCurrentPage: Function;
  cleanSearchValue: Function;
  pokemonSpecie: IPokeSpecie;
  evolutionChain: any;
  singlePokemon: IPokemon | null;
  getPokes: Function;
  currentPage: number;
  loadingPokes: boolean;
  pokes: Array<PokesData> | null;
}

export interface PokeProviderProps {
  children: ReactNode;
}

export interface PokesData {
  name: string;
  url: string;
}

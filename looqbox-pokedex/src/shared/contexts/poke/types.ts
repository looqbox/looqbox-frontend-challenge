/* eslint-disable no-unused-vars */
import { ReactNode } from 'react';

export interface PokeContextData {
  getSinglePokeData: (url: string) => Promise<any>;
  searchForASinglePokemon: (pokeName: string) => Promise<void>;
  pokemonNotFound: boolean;
  setCurrentPage: Function;
  cleanSearchValue: Function;
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

export type IPokeType =
  | 'grass'
  | 'fire'
  | 'water'
  | 'electric'
  | 'bug'
  | 'normal'
  | 'poison'
  | 'ground'
  | 'fairy'
  | 'fighting'
  | 'psychic'
  | 'ghost'
  | 'rock'
  | 'ice'
  | 'dark'
  | 'dragon'
  | 'steel';

export interface IPokemon {
  height: number;
  id: number;
  is_default: boolean;
  name: string;
  order: number;
  sprites: {
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
    versions: {
      'generation-v': {
        'black-white': {
          animated: {
            front_default: string;
          };
          front_default: string;
        };
      };
    };
  };
  stats: [
    {
      base_stat: number;
      effort: number;
      stat: {
        name: string;
        url: string;
      };
    },
  ];
  types: [
    {
      slot: number;
      type: {
        name: IPokeType;
        url: string;
      };
    },
  ];
  weight: number;
}

import React from 'react';
import { useLocation } from 'react-router';
import api from '../services/api';

export interface IPropsCard {
  name: string;
  base_experience: number;
  weight: number;
  height: number;

  species: {
    name: string;
  };
  abilities: {
    ability: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

interface IPropsPokemon {
  data: IPropsCard[];
  pokemonSelected: IPropsCard;
  loading: boolean;
  infoSpecies: IPropInfoSpecies;
  listInitial: () => void;
  search: (value: string) => void;
  selectPokemon: (data: IPropsCard) => void;
  cleanPokemonSelected: () => void;
  getDataInfo: (id: string) => void;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IPropInfoSpecies {
  capture_rate: number;
  growth_rate: {
    name: string;
  };
  shape: {
    name: string;
  };
  flavor_text_entries: {
    language: { name: string };
    version: { name: string };
    flavor_text: string;
  }[];
  color: {
    name: string;
  };
  egg_groups: {
    name: string;
  }[];
  habitat: {
    name: string;
    url: string;
  };
  varieties: {
    is_default: boolean;
    pokemon: {
      name: string;
      url: string;
    };
  }[];
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
}

export const PokemonContext = React.createContext({} as IPropsPokemon);

export const PokemonProvider: React.FC = ({ children }) => {
  const arrayPokemonsInitials = [25, 150, 131, 1, 95, 152, 6, 123];

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState([] as IPropsCard[]);
  const [pokemonSelected, setPokemonSelected] = React.useState(
    {} as IPropsCard,
  );
  const [infoSpecies, setInfoSpecies] = React.useState({} as IPropInfoSpecies);

  async function listInitial() {
    const arrayData = [] as IPropsCard[];
    setLoading(true);

    for (let i = 0; i < arrayPokemonsInitials.length; i++) {
      const responce = await api.get(`pokemon/${arrayPokemonsInitials[i]}`);
      arrayData.push(responce.data);
    }
    setData(arrayData);
    setLoading(false);
  }

  async function search(value: string) {
    setLoading(true);
    const responce = await api.get(`pokemon/${value}`);
    setPokemonSelected(responce.data);
    setLoading(false);
  }

  async function selectPokemon(data: IPropsCard) {
    setPokemonSelected(data);
  }

  function cleanPokemonSelected() {
    setPokemonSelected({} as IPropsCard);
  }

  async function getDataInfo(id: string) {
    setLoading(true);

    if (!Object.keys(pokemonSelected).length) {
      const pokemonSelectedResponce = await api.get(`pokemon/${id}`);
      setPokemonSelected(pokemonSelectedResponce.data);
    }

    const specieResponce = await api.get(`/pokemon-species/${id}`);
    setInfoSpecies(specieResponce.data);

    setLoading(false);
  }
  return (
    <PokemonContext.Provider
      value={{
        data,
        pokemonSelected,
        loading,
        infoSpecies,
        setLoading,
        listInitial,
        search,
        selectPokemon,
        cleanPokemonSelected,
        getDataInfo,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

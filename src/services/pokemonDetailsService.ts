// src/services/pokemonDetailService.ts
import axios from 'axios';
import { PokemonDetails } from '../types/PokemonDetails'; // Importando a nova interface

export const fetchPokemonDetails = async (id: number): Promise<PokemonDetails> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const data = response.data;

  return {
    name: data.name,
    types: data.types.map((type: { slot: number; type: { name: string; url: string } }) => ({
      slot: type.slot,
      type: {
        name: type.type.name,
        url: type.type.url,
      },
    })),
    weight: data.weight,
    height: data.height,
    stats: data.stats.map((stat: { base_stat: number; effort: number; stat: { name: string; url: string } }) => ({
      base_stat: stat.base_stat,
      effort: stat.effort,
      stat: {
        name: stat.stat.name,
        url: stat.stat.url,
      },
    })),
    abilities: data.abilities.map((ability: { ability: { name: string; url: string } }) => ({
      ability: {
        name: ability.ability.name,
        url: ability.ability.url,
      },
    })),
    imgUrl: data.sprites.front_default
  };
};

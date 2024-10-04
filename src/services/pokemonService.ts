// pokemonService.ts
import axios from 'axios';
import { Pokemon } from '../types/Pokemon';

export const fetchPokemons = async (offset: number, limit: number): Promise<{ data: Pokemon[], total: number }> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const results = response.data.results;

  const pokemonDetails = await Promise.all(
    results.map(async (pokemon: any) => {
      const detailsResponse = await axios.get(pokemon.url);
      return {
        name: detailsResponse.data.name,
        imgUrl: detailsResponse.data.sprites.front_default,
        resume: `Este é o ${detailsResponse.data.name}, um Pokémon do tipo ${detailsResponse.data.types[0].type.name}.`,
        id: detailsResponse.data.id
      };
    })
  );

  return { data: pokemonDetails, total: response.data.count };
};

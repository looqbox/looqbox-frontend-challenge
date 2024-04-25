import {
  PokemonResponseWithoutSpecies,
  PokemonSpecies,
} from '@/@types/pokemon';
import { api } from '@/lib/axios';

export async function getPokemonByName(pokemonName: string) {
  const pokemonResponseWithoutSpecie =
    await api.get<PokemonResponseWithoutSpecies>(`/pokemon/${pokemonName}`);

  const pokemonWithoutSpecie = pokemonResponseWithoutSpecie.data;

  const pokemonSpeciesResponse = await api.get<PokemonSpecies>(
    `/pokemon-species/${pokemonWithoutSpecie.species.name}`
  );

  return { ...pokemonWithoutSpecie, species: pokemonSpeciesResponse.data };
}

import axios from "axios";
import { ResultPokemonList, PokemonData } from "../../types/pokemon.types";

export async function getPokemonList({pageParam}: {pageParam: string}): Promise<ResultPokemonList> {
  const { data } = await axios.get<ResultPokemonList>(`${pageParam}`);

  const urls = data.results.map(data => data.url);

  const fetches = urls.map(url => axios.get(url));

  const results = await Promise.all(fetches);
  const resultsData = results.map(({data}) => data as PokemonData);

  return {
    results: data.results, 
    pokemons: resultsData,
    count: data.count, 
    next: data.next, 
    previous: data.previous
  };
}

export async function getPokemonData(search: string): Promise<PokemonData> {
  const { data } = await axios.get<PokemonData>(`https://pokeapi.co/api/v2/pokemon/${search}`);

  return data;
}
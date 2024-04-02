import { IPokemon } from '../interfaces/pokemon-types';

export const fetchPokemonListService = async (limit: number = 10, offset: number = 0, name: string = ""): Promise<IPokemon[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await response.json();
    
    const pokemonResp = await Promise.all(data.results.map(async (pokemon:any) => {
        const response = await fetch(pokemon?.url);
        return await response.json() as IPokemon;
    }))
    return pokemonResp;
};

export const fetchPokemonDetailServiceByName = async (name: String): Promise<IPokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = await response.json();
    return data as IPokemon;
};

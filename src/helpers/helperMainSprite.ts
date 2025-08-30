import { getIdFromUrl } from './helperGetIdFromUrl';

/**
 * Returns the official artwork sprite URL for a Pokémon given its API resource URL.
 * @param url - The full resource URL (e.g., 'https://pokeapi.co/api/v2/pokemon/1/')
 * @returns The URL to the official artwork PNG, or an empty string if not found
 * @example
 * getMainSprite('https://pokeapi.co/api/v2/pokemon/1/') // returns 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
 */
export function getMainSprite(url: string): string {
	const id = getIdFromUrl(url);
	return id
		? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
		: '';
}

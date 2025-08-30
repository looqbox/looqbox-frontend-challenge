/**
 * Extracts the ID from a PokéAPI resource URL.
 * @param url - The full resource URL (e.g., 'https://pokeapi.co/api/v2/pokemon/1/')
 * @returns The extracted ID as a string
 * @example
 * getIdFromUrl('https://pokeapi.co/api/v2/pokemon/1/') // returns '1'
 * getIdFromUrl('https://pokeapi.co/api/v2/ability/150/') // returns '150'
 */
export function getIdFromUrl(url: string): string {
	const parts = url.split('/').filter(Boolean);
	return parts.length > 0 ? parts[parts.length - 1] : '';
}

export const pokemonsQueryKeys = {
  getPokemons: 'pokemons',
  getPokemon: (name: string) => ['pokemon', name] as const,
};

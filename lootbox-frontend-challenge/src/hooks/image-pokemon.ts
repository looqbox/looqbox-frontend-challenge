export const setImagePokemon = (url: string) => {
  const pokemonId = url.split('/').filter(Boolean).pop();
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
};

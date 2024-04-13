export const formatPokemonId = (id: number) => {
  if (id < 10) return `#00${id}`;
  else if (id >= 10 && id <= 99) return `#0${id}`;
  else return `#${id}`;
};
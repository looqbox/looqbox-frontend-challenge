export function formatPokemonId(id: number) {
  return `#${id.toString().padStart(3, '0')}`
}

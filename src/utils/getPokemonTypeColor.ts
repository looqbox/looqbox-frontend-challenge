export function getPokemonTypeColor(type: string): string {
  switch (type.toLowerCase()) {
    case 'normal':
      return 'bg-type-normal'
    case 'fire':
      return 'bg-type-fire'
    case 'water':
      return 'bg-type-water'
    case 'electric':
      return 'bg-type-electric'
    case 'grass':
      return 'bg-type-grass'
    case 'ice':
      return 'bg-type-ice'
    case 'fighting':
      return 'bg-type-fighting'
    case 'poison':
      return 'bg-type-poison'
    case 'ground':
      return 'bg-type-ground'
    case 'flying':
      return 'bg-type-flying'
    case 'psychic':
      return 'bg-type-psychic'
    case 'bug':
      return 'bg-type-bug'
    case 'rock':
      return 'bg-type-rock'
    case 'ghost':
      return 'bg-type-ghost'
    case 'dragon':
      return 'bg-type-dragon'
    case 'dark':
      return 'bg-type-dark'
    case 'steel':
      return 'bg-type-steel'
    case 'fairy':
      return 'bg-type-fairy'
    default:
      return 'bg-type-normal'
  }
}

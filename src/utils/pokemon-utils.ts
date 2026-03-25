import type { PokemonStat, PokemonType } from '@/services/types'

export const pokemonTypeColors: Record<PokemonType, string> = {
  normal: '#CAC9B2',
  fire: '#EDB68E',
  water: '#A7BEEE',
  electric: '#F1DE8C',
  grass: '#88B989',
  ice: '#C1E2E1',
  fighting: '#D78D8A',
  poison: '#C795C6',
  ground: '#E7D5A8',
  flying: '#CABDEF',
  psychic: '#F2A0B9',
  bug: '#C9D283',
  rock: '#D1CA85',
  ghost: '#AFA1C1',
  dragon: '#AD90F4',
  steel: '#D1D1DD',
  dark: '#AEA199',
  fairy: '#E1B8CC',
  stellar: '#7EB0E1',
  unknown: '#68A090',
}

export const getPokemonImage = (id: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

export const getPokemonId = (url: string) => {
  const id = url.split('/').at(-2)

  return id || ''
}

export const pokemonStatNames: Record<PokemonStat, string> = {
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  'special-attack': 'Special Attack',
  'special-defense': 'Special Defense',
  speed: 'Speed',
}

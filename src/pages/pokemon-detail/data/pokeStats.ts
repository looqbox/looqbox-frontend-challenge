import type { PokemonProps } from '../../../types/pokemonTypes'

export const formatPokeStats = (pokeData: PokemonProps) => {
  return {
    height: pokeData.height / 10, // Convert to meters
    weight: pokeData.weight / 10, // Convert to kg
    stats: {
      hp: pokeData.stats.find(s => s.stat.name === 'hp')?.base_stat ?? 0,
      attack:
        pokeData.stats.find(s => s.stat.name === 'attack')?.base_stat ?? 0,
      defense:
        pokeData.stats.find(s => s.stat.name === 'defense')?.base_stat ?? 0,
      specialAttack:
        pokeData.stats.find(s => s.stat.name === 'special-attack')?.base_stat ??
        0,
      specialDefense:
        pokeData.stats.find(s => s.stat.name === 'special-defense')
          ?.base_stat ?? 0,
      speed: pokeData.stats.find(s => s.stat.name === 'speed')?.base_stat ?? 0
    }
  }
}

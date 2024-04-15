import { PokemonTypeEnum } from 'global/enum/pokemonType.enum'
import { PokemonStat } from 'global/interfaces/Pokemon.interface'

export interface PokemonStatsProps {
  pokemonType: PokemonTypeEnum
  stats: PokemonStat[]
}

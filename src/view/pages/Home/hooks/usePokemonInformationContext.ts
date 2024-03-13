import { useContext } from 'react'
import { PokemonInformationContext } from '../contexts/PokemonInformation/PokemonInformation.context'

export function usePokemonInformationContext () {
  return useContext(PokemonInformationContext)
}

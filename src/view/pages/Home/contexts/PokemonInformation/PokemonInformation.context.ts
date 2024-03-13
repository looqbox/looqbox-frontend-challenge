import { createContext } from 'react'
import { type IPokemonInformationContext } from './PokemonInformation.types'

export const PokemonInformationContext = createContext<IPokemonInformationContext>({} as IPokemonInformationContext)

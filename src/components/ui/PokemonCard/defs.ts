import { Pokemon } from 'global/interfaces/Pokemon.interface'

export interface PokemonCardProps {
  pokemon: Pokemon
  isOnTheWishlist: boolean
  onPressDetails: () => void
  onAddToWishlist: () => void
}

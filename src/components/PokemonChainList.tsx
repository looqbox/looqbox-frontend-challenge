import { Link } from 'react-router-dom'
import type { Pokemon } from '../api/pokemon'
import { SpriteHoverAnimated } from './SpriteHoverAnimated'

export const PokemonChainList = ({ chain }: { chain: Pokemon[] }) => {
  return (
    <div className="flex gap-2 shadow w-full">
      {chain.map((pokemon) => {
        return (
          <Link
            key={pokemon.id}
            to={`/pokemon/${pokemon.id}`}
            className="flex-1 flex items-center"
          >
            <div className="flex-1 h-full bg-white rounded-lg flex justify-center items-center p-4 hover:bg-gray-50 transition-colors">
              <SpriteHoverAnimated pokemon={pokemon} />
            </div>
          </Link>
        )
      })}
    </div>
  )
}

import { Link } from 'react-router'
import { twMerge } from 'tailwind-merge'
import { getPokemonTypeColor } from '../../utils/getPokemonTypeColor'

export function PokemonType({
  name,
  redirectUrl,
}: {
  name: string
  redirectUrl: string
}) {
  return (
    <Link
      to={redirectUrl}
      target='_blank'
      key={name}
      className={twMerge(
        'rounded-2xl rounded-tr-none rounded-bl-none px-3 py-1 text-white text-shadow-lg font-medium text-sm mb-2 transition duration-300 ease-in-out hover:brightness-110 hover:shadow-md',
        getPokemonTypeColor(name),
      )}
    >
      {name}
    </Link>
  )
}

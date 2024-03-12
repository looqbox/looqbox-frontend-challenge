import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'

import { useAppSelector } from '@/store'
import { breakpoints } from '@/styles/theme'

import { PokemonCardItem } from './pokemon-card-item'

const useStyles = createUseStyles({
  root: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '3.2rem',

    maxWidth: '100%',
    width: '100%',

    [breakpoints.xl]: {
      gap: '2rem',
    },

    [breakpoints.sm]: {
      gridTemplateColumns: '1fr',
      gap: 16,
    },
  },
})

export function PokemonList() {
  const styles = useStyles()

  const pokemons = useAppSelector((state) => state.pokedex.pokemons)

  return (
    <ul className={styles.root}>
      {pokemons.map((pokemon) => (
        <li key={pokemon.id}>
          <Link to={`/pokemon/${pokemon.name}`}>
            <PokemonCardItem pokemon={pokemon} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

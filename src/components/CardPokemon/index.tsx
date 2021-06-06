import { Link } from 'react-router-dom';

import globalStyles from '../../styles/global.module.scss';
import styles from './style.module.scss';

interface CardPokemonProps {
  name: string;
  url: string;
}

export function CardPokemon({ name, url }: CardPokemonProps) {
  const id = url
    .replace('https://pokeapi.co/api/v2/pokemon', '')
    .replace(/\/((?:\d+?))\//g, '$1');

  return (
    <li>
      <Link className={styles.container} to={`/pokemon/${id}`}>
        <img
          className={styles.pokeball}
          src="/images/pokemon/pokeball.svg"
          alt="pokeball"
        />
        <img
          className={styles.pokemon}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={`Pokemon ${name}`}
        />

        <span className={globalStyles.capitalize}>{name}</span>
      </Link>
    </li>
  );
}

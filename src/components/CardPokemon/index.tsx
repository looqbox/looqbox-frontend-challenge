import { Link } from 'react-router-dom';
import styles from './style.module.scss';

export function CardPokemon() {
  return (
    <li>
      <Link className={styles.container} to="/pokemon/1">
        <img
          className={styles.pokeball}
          src="/images/pokemon/pokeball.svg"
          alt="pokeball"
        />
        <img
          className={styles.pokemon}
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
          alt="polemon tal"
        />

        <span>Bulbasaur</span>
      </Link>
    </li>
  );
}

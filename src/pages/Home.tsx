import globalStyles from '../styles/global.module.scss';
import styles from '../styles/pages/home.module.scss';
import { MdSearch } from 'react-icons/md';
import { CardPokemon } from '../components/CardPokemon/index';

export function Home() {
  return (
    <div className={globalStyles.min100vh}>
      <main className={globalStyles.container}>
        <img
          className={styles.pokemonLogo}
          src="/images/pokemon/logo.svg"
          alt="Logo do pokemon"
        />
        <form className={styles.containerForm}>
          <div className={styles.containerInputSearch}>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Look for a pokemon"
            />
            <button type="submit">
              <MdSearch />
            </button>
          </div>
        </form>

        <ul className={styles.pokemonList}>
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
          <CardPokemon />
        </ul>
      </main>
    </div>
  );
}

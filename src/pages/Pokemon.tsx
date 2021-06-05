import globalStyles from '../styles/global.module.scss';
import styles from '../styles/pages/pokemon.module.scss';
import { Link } from 'react-router-dom';
import { CardInformation } from '../components/CardInformation/index';
import { MdArrowBack } from 'react-icons/md';

export function Pokemon() {
  return (
    <div className={globalStyles.min100vh}>
      <main className={globalStyles.container}>
        <Link className={styles.link} to="/">
          <MdArrowBack />
          Voltar
        </Link>

        <div className={styles.content}>
          <section className={styles.informations}>
            <h1>Bulbasaur</h1>

            <div className={styles.containerCardInformation}>
              <CardInformation label="Height" value={8} />
              <CardInformation label="Weight" value={32} />
            </div>

            <h4>Abilities</h4>

            <ul className={styles.abilities}>
              <li>Overgrow</li>
              <li>Chlorophyll</li>
            </ul>
          </section>

          <section className={styles.imageAndType}>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
              alt="Pokemon"
            />

            <ul className={styles.types}>
              <li>
                <img src="/images/pokemon/types/poison.png" alt="poison" />
                Poison
              </li>

              <li>
                <img src="/images/pokemon/types/grass.png" alt="grass" />
                Grass
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

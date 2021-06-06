import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import { usePokemon } from '../hooks/usePokemon';
import { Loading } from '../components/Loading/index';
import { CardInformation } from '../components/CardInformation/index';

import globalStyles from '../styles/global.module.scss';
import styles from '../styles/pages/pokemon.module.scss';

export function Pokemon() {
  const { isLoading, showPokemon, selectedPokemon } = usePokemon();
  const { id } = useParams();

  //ativa a função que faz a busca na PokeApi com o parâmetro ID (ID ou nome do pokemon)
  useEffect(() => {
    showPokemon(id);
  }, [showPokemon, id]);

  if (isLoading) return <Loading />;

  return (
    <div className={globalStyles.min100vh}>
      <main className={globalStyles.container}>
        <Link className={styles.link} to="/">
          <MdArrowBack />
          Return
        </Link>

        <div className={styles.content}>
          <h1 className={globalStyles.capitalize}>{selectedPokemon?.name}</h1>
          <section className={styles.informations}>
            <div className={styles.containerCardInformation}>
              <CardInformation label="Height" value={selectedPokemon?.height} />
              <CardInformation label="Weight" value={selectedPokemon?.weight} />
            </div>

            <h4>Abilities</h4>

            <ul className={styles.abilities}>
              {selectedPokemon?.abilities.map(({ ability }) => {
                return (
                  <li className={globalStyles.capitalize} key={ability.name}>
                    {ability.name.replace('-', ' ')}
                  </li>
                );
              })}
            </ul>
          </section>

          <section className={styles.imageAndType}>
            <img
              src={
                selectedPokemon?.sprites.other['official-artwork']
                  .front_default ??
                selectedPokemon?.sprites.other.dream_world.front_default
              }
              alt={`Pokemon ${selectedPokemon?.name}`}
            />

            <ul className={styles.types}>
              {selectedPokemon?.types.map(({ type }) => {
                return (
                  <li className={globalStyles.capitalize} key={type.name}>
                    <img
                      src={`/images/pokemon/types/${type.name}.png`}
                      alt={type.name}
                    />
                    {type.name}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

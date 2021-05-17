import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import styles from './styles.module.css';
import ModalVariations from '../../components/ModalVariations';
import { PokemonContext } from '../../contexts/PokemonContext';
import { useParams } from 'react-router';
import Loading from '../../components/Loading';
import Image from '../../components/Image';
import TagAbilities from '../../components/TagAbilities';
import TagsTypes from '../../components/TagsTypes';
import Chart from '../../components/Chart';

interface IParams {
  id: string;
}
export const Pokemon: React.FC = () => {
  const params = useParams() as IParams;

  const { closeModal, openModal, InsertContent } =
    React.useContext(ModalContext);
  const { getDataInfo, infoSpecies, pokemonSelected, loading } =
    React.useContext(PokemonContext);

  React.useEffect(() => {
    getDataInfo(params.id);
    closeModal();
  }, [params]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(
    () =>
      InsertContent(
        <ModalVariations
          variations={infoSpecies.varieties}
          pokemon_select={pokemonSelected.name}
        />,
      ),
    [infoSpecies],
  );
  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div
            className={styles.background}
            style={{
              background: `var(--pokemon-${infoSpecies.color.name})`,
            }}
          ></div>
          <div className={styles.content}>
            <div className={`${styles.box} ${styles.box_left}`}>
              <div className={styles.cardInfo}>
                <div className={styles.image_pokemon}>
                  <Image
                    src={
                      pokemonSelected.sprites.other.dream_world.front_default
                    }
                    alt={pokemonSelected.name}
                  />
                </div>
                <h1 className={styles.title}>{pokemonSelected.name}</h1>
                <div className={styles.container_tags}>
                  {infoSpecies.is_legendary && (
                    <span
                      className={`${styles.legendary} ${styles.tags_title}`}
                    >
                      Legendary
                    </span>
                  )}
                  {infoSpecies.is_mythical && (
                    <span className={`${styles.mythical} ${styles.tags_title}`}>
                      Mythical
                    </span>
                  )}
                </div>
                <div className={styles.container_tags}>
                  <TagsTypes
                    name_pokemon={pokemonSelected.name}
                    types={pokemonSelected.types}
                  />
                </div>

                <p className={styles.descripition}>
                  {
                    infoSpecies.flavor_text_entries.find(
                      item =>
                        item.language.name === 'en' &&
                        item.version.name === 'black',
                    )?.flavor_text
                  }
                </p>

                <button
                  type="button"
                  className={styles.varieties}
                  style={{
                    background: `var(--pokemon-${infoSpecies.color.name})`,
                  }}
                  onClick={openModal}
                >
                  change variation
                </button>
              </div>
            </div>
            <div className={`${styles.box} ${styles.box_right}`}>
              <div className={`${styles.info_pokemon} ${styles.info}`}>
                <h2>
                  Base experience
                  <span>{pokemonSelected.base_experience} XP</span>
                </h2>
                <h2>
                  Weight
                  <span>{pokemonSelected.weight / 10} Kg</span>
                </h2>
                <h2>
                  Height
                  <span>{pokemonSelected.height / 10} m</span>
                </h2>

                <Chart
                  name_pokemon={pokemonSelected.name}
                  stats={pokemonSelected.stats}
                  color={infoSpecies.color.name}
                />
              </div>

              <div className={`${styles.info_species} ${styles.info}`}>
                <h2>
                  Capture rate
                  <span>
                    {Math.floor((infoSpecies.capture_rate * 100) / 255)}%
                  </span>
                </h2>
                <h2>
                  Habitat
                  <span>{infoSpecies.habitat.name}</span>
                </h2>
                <h2>
                  Shape
                  <span>{infoSpecies.shape.name}</span>
                </h2>
                <div
                  className={`${styles.container_tags} ${styles.container_tags_abilities}`}
                >
                  <h2>Abilities:</h2>
                  <div className={styles.content_tags}>
                    <TagAbilities
                      name_pokemon={pokemonSelected.name}
                      abilities={pokemonSelected.abilities}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { PokemonContext } from '../../contexts/PokemonContext';
import Chart from '../Chart';
import Image from '../Image';
import ModalVariations from '../ModalVariations';
import TagAbilities from '../TagAbilities';
import TagsTypes from '../TagsTypes';
import TextInfo from '../TextInfo';
import styles from './styles.module.css';

const PokemonInfo: React.FC = () => {
  const { openModal, InsertContent } = React.useContext(ModalContext);
  const { infoSpecies, pokemonSelected } = React.useContext(PokemonContext);

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
    <div className={styles.content}>
      <div className={`${styles.box} ${styles.box_left}`}>
        <div className={styles.cardInfo}>
          <div className={styles.image_pokemon}>
            <Image
              src={pokemonSelected.sprites.other.dream_world.front_default}
              alt={pokemonSelected.name}
            />
          </div>
          <h1 className={styles.title}>{pokemonSelected.name}</h1>
          <div className={styles.container_tags}>
            {infoSpecies.is_legendary && (
              <span className={`${styles.legendary} ${styles.tags_title}`}>
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
                  item.language.name === 'en' && item.version.name === 'black',
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
          <TextInfo
            title="Base experience"
            text={`${pokemonSelected.base_experience} XP`}
          />
          <TextInfo title="Weight" text={`${pokemonSelected.weight / 10} Kg`} />
          <TextInfo
            title="Height"
            text={`${pokemonSelected.base_experience / 10} m`}
          />

          <Chart
            name_pokemon={pokemonSelected.name}
            stats={pokemonSelected.stats}
            color={infoSpecies.color.name}
          />
        </div>

        <div className={`${styles.info_species} ${styles.info}`}>
          <TextInfo
            title="Capture rate"
            text={`${Math.floor((infoSpecies.capture_rate * 100) / 255)} %`}
          />
          <TextInfo title="Habitat" text={infoSpecies.habitat.name} />
          <TextInfo title="Shape" text={infoSpecies.shape.name} />

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
  );
};

export default PokemonInfo;

import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { PokemonContext } from '../../contexts/PokemonContext';
import TagAbilities from '../TagAbilities';
import TagsTypes from '../TagsTypes';
import styles from './styles.module.css';

import Image from '../Image';
import { Link } from 'react-router-dom';
import TextInfo from '../TextInfo';

import ButtonBack from '../ButtonBack';

export const ModalPokemon: React.FC = () => {
  const { closeModal } = React.useContext(ModalContext);
  const { pokemonSelected, cleanPokemonSelected, setLoading } =
    React.useContext(PokemonContext);

  function closeModalBackground(
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    if (e.target === e.currentTarget) {
      closeModal();
      cleanPokemonSelected();
    }
  }

  return (
    <div className={styles.container} onClick={e => closeModalBackground(e)}>
      <div className={styles.container_modal}>
        <ButtonBack />
        <div className={`${styles.content}`}>
          <div
            className={`${styles.background}`}
            style={{
              background: `var(--type-${pokemonSelected.types[0].type.name})`,
            }}
          />
          <div className={styles.image}>
            <Image
              src={pokemonSelected.sprites.other.dream_world.front_default}
              alt={pokemonSelected.name}
            />
          </div>
          <div className={styles.info}>
            <div className={styles.header_modal_info}>
              <h1 className={styles.title}>{pokemonSelected.name}</h1>
              <div className={styles.container_tags}>
                <TagsTypes
                  name_pokemon={pokemonSelected.name}
                  types={pokemonSelected.types}
                />
              </div>
            </div>
            <div className={styles.cardInfo}>
              <TextInfo
                title="Base experience"
                text={`${pokemonSelected.base_experience} XP`}
              />
              <TextInfo
                title="Weight"
                text={`${pokemonSelected.weight / 10}Kg`}
              />
              <TextInfo
                title="Height"
                text={`${pokemonSelected.height / 10}m`}
              />
              <div
                className={`${styles.container_tags} ${styles.container_tags_abilities}`}
              >
                <h2>Abilities:</h2>
                <div className={styles.content_abilities}>
                  <TagAbilities
                    name_pokemon={pokemonSelected.name}
                    abilities={pokemonSelected.abilities}
                  />
                </div>
              </div>
              <Link
                to={`/pokemon/${pokemonSelected.name}`}
                className={styles.link_more_information}
                onClick={() => setLoading(true)}
              >
                More information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

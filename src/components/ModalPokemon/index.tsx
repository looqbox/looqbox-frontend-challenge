import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { PokemonContext } from '../../contexts/PokemonContext';
import TagAbilities from '../TagAbilities';
import TagsTypes from '../TagsTypes';
import styles from './styles.module.css';

import icon_back from '../../assets/icons/back.svg';
import Image from '../Image';

export const ModalPokemon: React.FC = () => {
    const { closeModal } = React.useContext(ModalContext);
    const { pokemonSelected, selectPokemon } = React.useContext(PokemonContext);

    function closeModalBackground(
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    ) {
        if (e.target === e.currentTarget) {
            closeModal();
            selectPokemon();
        }
    }
    function closeModalClick() {
        closeModal();
        selectPokemon();
    }

    return (
        <div
            className={styles.container}
            onClick={e => closeModalBackground(e)}
        >
            <div className={styles.container_modal}>
                <button
                    role="back"
                    className={styles.close_modal_btn}
                    onClick={closeModalClick}
                >
                    <img src={icon_back} alt="back" />
                </button>
                <div className={`${styles.content}`}>
                    <div
                        className={`${styles.background}`}
                        style={{
                            background: `var(--type-${pokemonSelected.types[0].type.name})`,
                        }}
                    ></div>
                    <div className={styles.image}>
                        <Image
                            src={
                                pokemonSelected.sprites.other.dream_world
                                    .front_default
                            }
                            alt={pokemonSelected.name}
                        />
                    </div>
                    <div className={styles.info}>
                        <div className={styles.header_modal_info}>
                            <h1 className={styles.title}>
                                {pokemonSelected.name}
                            </h1>
                            <div className={styles.container_tags}>
                                <TagsTypes
                                    name_pokemon={pokemonSelected.name}
                                    types={pokemonSelected.types}
                                />
                            </div>
                        </div>
                        <div className={styles.cardInfo}>
                            <h2>
                                Weight
                                <span>{pokemonSelected.weight / 10} Kg</span>
                            </h2>
                            <h2>
                                Height
                                <span>{pokemonSelected.height / 10} m</span>
                            </h2>
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
                            <a
                                href={`/pokemon/${pokemonSelected.name}`}
                                className={styles.link_more_information}
                            >
                                More information
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

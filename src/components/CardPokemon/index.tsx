import React from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import { IPropsCard, PokemonContext } from '../../contexts/PokemonContext';
import { ModalPokemon } from '../ModalPokemon';
import TagsTypes from '../TagsTypes';
import styles from './styles.module.css';

interface IProps {
    pokemon: IPropsCard;
}
const CardPokemon: React.FC<IProps> = ({ pokemon }) => {
    const { openModal, InsertContent } = React.useContext(ModalContext);
    const { selectPokemon } = React.useContext(PokemonContext);

    React.useEffect(
        () => InsertContent(<ModalPokemon />),
        // eslint-disable-next-line
        [],
    );

    function handleModal() {
        selectPokemon(pokemon);
        openModal();
    }
    return (
        <div className={styles.container} onClick={handleModal}>
            <div className={styles.image}>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                />
            </div>
            <div className={styles.content}>
                <h1>{pokemon.name}</h1>
                <div className={styles.types_container}>
                    <TagsTypes
                        types={pokemon.types}
                        name_pokemon={pokemon.name}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardPokemon;

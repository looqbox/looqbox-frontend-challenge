import React from 'react';
import styles from './styles.module.css';

interface IPropsCard {
    pokemon: {
        name: string;
        base_experience: number;
        weight: number;
        sprites: {
            other: {
                dream_world: {
                    front_default: string;
                };
            };
        };
        types: {
            slot: number;
            type: {
                name: string;
            };
        }[];
    };
}
const CardPokemon: React.FC<IPropsCard> = ({ pokemon }) => {
    console.log(pokemon.name);
    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img
                    src={pokemon.sprites.other.dream_world.front_default}
                    alt={pokemon.name}
                />
            </div>
            <div className={styles.content}>
                <h1>{pokemon.name}</h1>
                <div className={styles.types_container}>
                    {pokemon.types.map(types => {
                        return (
                            <div
                                className={`${styles.type}`}
                                style={{
                                    background: `var(--type-${types.type.name})`,
                                }}
                                key={pokemon.name + types.type.name}
                            >
                                {types.type.name}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CardPokemon;

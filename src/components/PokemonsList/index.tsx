import React from 'react';
import CardPokemon from '../CardPokemon';
import styles from './styles.module.css';

interface IPropsCard {
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
}
interface IPropsData {
    data: IPropsCard[];
}
const Pokemons: React.FC<IPropsData> = ({ data }) => {
    return (
        <div className={styles.container}>
            {data?.map(item => {
                return <CardPokemon pokemon={item} key={item.name} />;
            })}
        </div>
    );
};

export default Pokemons;

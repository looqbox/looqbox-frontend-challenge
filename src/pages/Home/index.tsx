import React from 'react';
import Header from '../../components/Header';
import Pokemons from '../../components/PokemonsList';
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
export const Home: React.FC = () => {
    const [data, setData] = React.useState([] as IPropsCard[]);

    React.useEffect(() => {
        //Carregar pokemons iniciais
        (async () => {
            const arrayData = [];
            for (let i = 1; i < 9; i++) {
                const responce = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${i}`,
                );
                const dataJSON: IPropsCard = await responce.json();
                arrayData.push(dataJSON);
            }
            setData(arrayData);
        })();
    }, []);

    return (
        <div className={styles.container}>
            <Header />
            <Pokemons data={data} />
        </div>
    );
};

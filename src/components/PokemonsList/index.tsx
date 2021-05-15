import React from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import CardPokemon from '../CardPokemon';
import styles from './styles.module.css';

const PokemonsList: React.FC = () => {
    const { listInitial, data } = React.useContext(PokemonContext);

    React.useEffect(() => {
        listInitial();
        // eslint-disable-next-line
    }, []);

    return (
        <div className={styles.container}>
            {data?.map(item => {
                return <CardPokemon pokemon={item} key={item.name} />;
            })}
        </div>
    );
};

export default PokemonsList;

import React from 'react';
import { PokemonContext } from '../../contexts/PokemonContext';
import CardPokemon from '../CardPokemon';
import Loading from '../Loading';
import styles from './styles.module.css';

const PokemonsList: React.FC = () => {
  const { data, loading } = React.useContext(PokemonContext);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        data.map(item => <CardPokemon pokemon={item} key={item.name} />)
      )}
    </div>
  );
};

export default PokemonsList;

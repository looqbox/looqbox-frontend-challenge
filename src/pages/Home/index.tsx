import React from 'react';
import Header from '../../components/Header';
import PokemonsList from '../../components/PokemonsList';
import styles from './styles.module.css';

export const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <Header />
            <PokemonsList />
        </div>
    );
};

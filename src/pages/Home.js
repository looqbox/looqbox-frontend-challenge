import React, { useState } from 'react';

import Header from '../components/Header';
import PokemonListItem from '../components/PokemonListItem';

import api from '../services/api';

import '../styles/pages/home.css';

export default function Home(){
    const [searchedPokemon, setSearchedPokemon] = useState('');
    const [searchedPokemonResult, setSearchedPokemonResult] = useState({});
    const [showList, setShowList] = useState(true);
    const [error, setError] = useState(false);

    async function handleSearchPokemon(e){
        e.preventDefault();
        setError(false);

        try {
            const { data } = await api.get(`/pokemon/${searchedPokemon.toLowerCase()}`);
            
            setSearchedPokemonResult({
                number: data.id.toString(),
                name: data.name
            });
            setShowList(false);
        } catch (err) {
            setError(true);
        }
    }

    function handlePokemonInputChange(pokemonName){
        setSearchedPokemon(pokemonName);

        if(pokemonName.length === 0){
            setError(false);
            setShowList(true);
        }
    }

    return (
        <>
            <Header />

            <main>
                <form 
                    className='search-container'
                    onSubmit={(event) => handleSearchPokemon(event)}
                >
                    <input 
                        type='text'
                        placeholder='Search a Pokémon'
                        onChange={(event) => handlePokemonInputChange(event.target.value)}
                    />
                </form>

                {error ? (
                    <div className="alert alert-warning" role="alert">
                        Pokémon not found!
                    </div>
                ) : (
                    <div className="container pokemon-list">
                    {showList ?
                        (
                            <>
                                <PokemonListItem number='1' name='Bulbasaur' />
                                <PokemonListItem number='2' name='Ivysaur' />
                                <PokemonListItem number='3' name='Venusaur' />
                                <PokemonListItem number='4' name='Charmander' />
                                <PokemonListItem number='5' name='Charmeleon' />
                                <PokemonListItem number='6' name='Charizard' />
                                <PokemonListItem number='7' name='Squirtle' />
                                <PokemonListItem number='8' name='Wartortle' />
                                <PokemonListItem number='9' name='Blastoise' />
                            </>
                        )
                        :
                        (
                            <PokemonListItem 
                                number={searchedPokemonResult.number} 
                                name={searchedPokemonResult.name} 
                            />
                        )
                    }
                    </div>
                )}                
            </main>
        </>
    )
}
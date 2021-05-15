import React, { useState } from 'react';

import Header from '../components/Header';
import PokemonListItem from '../components/PokemonListItem';

import api from '../services/api';

import '../styles/pages/home.css';

export default function Home(){
    const [searchedPokemon, setSearchedPokemon] = useState('');
    const [searchedPokemonResult, setSearchedPokemonResult] = useState({});
    const [showList, setShowList] = useState(true);

    async function handleSearchPokemon(e){
        e.preventDefault();

        try {
            const { data } = await api.get(`/pokemon/${searchedPokemon.toLowerCase()}`);
            
            setSearchedPokemonResult({
                number: data.id.toString(),
                name: data.name
            });
            setShowList(false);
        } catch (error) {
            alert('Pokémon not found :(');
        }
    }

    function handlePokemonInputChange(pokemonName){
        setSearchedPokemon(pokemonName);

        if(pokemonName.length === 0){
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
            </main>
        </>
    )
}
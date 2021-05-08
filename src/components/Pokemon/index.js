import React, { useState, useEffect } from 'react';
import Card from './Card';
import { getPokemon, getAllPokemon } from '../../services/pokemon';

import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { ButtonDiv, ContainerCard, ButtonPrevNext } from './PokemonStyled';

export default function Pokemon() {

    // Solicita informações da API
    const [pokemonData, setPokemonData] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const initialURL = 'https://pokeapi.co/api/v2/pokemon';

    // Efeito de carregamento da API
    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL);
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadPokemon(response.results);
            setLoading(false);
        }
        fetchData();
    }, []);
    // Método para avançar para a próxima lista da API.
    const next = async () => {
        setLoading(true);
        let data = await getAllPokemon(nextUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    };
    // Método para voltar na lista anterior da API.
    const prev = async () => {
        if (!prevUrl) return;
        setLoading(true);
        let data = await getAllPokemon(prevUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
        setLoading(false);
    };
    // Método que trata e solicita os dados na API
    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon);
            return pokemonRecord;
        }));

        const queryString = window.location.search.slice(8);
        // Checagem para a lógica do search funcionar
        if (queryString.length >= 1) {
            let pokemonFilter = _pokemonData.filter(obj => obj.name.includes(queryString.toLocaleLowerCase()));
            setPokemonData(pokemonFilter);
        }
        else {
            let pokemonFilter = _pokemonData;
            setPokemonData(pokemonFilter);
        }
    };

    return (
        <>
            {loading ? <h1 style={{ textAlign: 'center', color: '#fff' }}>Carregando...</h1> : (
                <>
                    <ContainerCard>
                        {pokemonData.map((pokemon, i) => {
                            return <Card pokemon={pokemon} key={i} />;
                        })}
                    </ContainerCard>
                    <ButtonDiv>
                        <ButtonPrevNext isNext={false} onClick={prev}><FaArrowLeft /></ButtonPrevNext>
                        <ButtonPrevNext isNext={true} onClick={next}><FaArrowRight /></ButtonPrevNext>
                    </ButtonDiv>
                </>
            )}
        </>
    );
}
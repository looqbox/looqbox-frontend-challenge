import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { api } from '../../services/api';
import { getAllPokemon, getPokemon } from '../../utils/pokemon.js';

import typeColours from '../../styles/typeColours';
import pokemonImg from '../../assets/pokeball.svg'

import {
  Title,
  Container,
  Form,
  Background,
  PokemonTypes,
  Card,
  Error,
} from './styles';

const Home = () => {
  const [searchPokemon, setSearchPokemon] = useState('');
  const [pokemon, setPokemon] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);
  const [inputError, setInputError] = useState('');

  const initialUrl = 'https://pokeapi.co/api/v2/pokemon/';

  const handleSearchPokemon = async (event) => {
    event.preventDefault();

    if (!searchPokemon) {
      setInputError('Heeey, the input is empty! 🤗');
      return;
    }

    try {
      const response = await api.get(`/${searchPokemon}`);
      const pokemonSearched = response.data;

      setPokemon([pokemonSearched]);
      setInputError('');
      setSearchPokemon('');
    } catch (err) {
      setInputError('Pokemon does not found! 😭');
    }
  };

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      await loadingPokemon(response.results);
    }

    fetchData();
  }, []);

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );

    setPokemonData(_pokemonData);
  };

  return (
    <>
      <Background>
        <img src={pokemonImg} alt="background" />
      </Background>

      <Title>Explore the Pokemons 😄</Title>

      <Form onSubmit={handleSearchPokemon}>
        <input
          value={searchPokemon}
          onChange={e => setSearchPokemon(e.target.value)}
          placeholder="You can explore here with a Pokemon name"
        />

        <button type="submit">Search</button>
      </Form>

      { inputError && <Error>{inputError}</Error> }

      <Container>
        {pokemon &&
          (pokemon.map(p => (
            <Card>
              <Link
                key={p.id}
                to={`/pokemon/${Number(p.id)}`}
              >
                <p>id: #{p.id}</p>
                <img src={p.sprites.other.dream_world.front_default} alt="Pokemon Avatar" />
                <h1>{p.name}</h1>

                <PokemonTypes>
                  {p.types.map(type => {
                    return <span style={{ backgroundColor: typeColours[type.type.name]}}>{type.type.name}</span>
                  })}
                </PokemonTypes>
              </Link>
            </Card>
          ))
        )}
      </Container>

      <Container>
        {pokemonData && (
          pokemonData.map(p => (
            <Card>
              <Link
                key={p.id}
                to={`/pokemon/${Number(p.id)}`}
              >
                <p>id: #{p.id}</p>
                <img src={p.sprites.other.dream_world.front_default} alt="Pokemon Avatar" />
                <h1>{p.name}</h1>

                <PokemonTypes>
                  {p.types.map(type => {
                    return <span style={{ backgroundColor: typeColours[type.type.name]}}>{type.type.name}</span>
                  })}
                </PokemonTypes>
              </Link>
            </Card>
          ))
        )}
      </Container>
    </>
  )
}

export default Home;
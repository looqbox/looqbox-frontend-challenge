import React, { useLayoutEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { usePokemon } from 'shared/contexts/pokemon';
import { IPokemon, IPokeMove } from 'shared/DTOs/pokemon';

import EvolutionChain from './components/EvolutionChain';
import Attacks from './components/Attacks';
import Header from './components/Header';
import Stats from './components/Stats';
import { Container } from './styles';

interface ParamsProps {
  pokeName: string;
}

const PokeInfo = () => {
  const params: ParamsProps = useParams();
  const {
    getSinglePokeData,
    getEvolutionChain,
    getPokemonSpecie,
    pokemonSpecie,
  } = usePokemon();

  const [pokemon, setPokemon] = useState<IPokemon>();
  const [moves, setMoves] = useState<IPokeMove[]>();

  useLayoutEffect(() => {
    const getPokemon = async () => {
      const response = await getSinglePokeData(`/pokemon/${params.pokeName}`);

      await getPokemonSpecie(response.species.url);
      setPokemon(response);
    };

    getPokemon();
  }, [getSinglePokeData, getPokemonSpecie, params]);

  useLayoutEffect(() => {
    if (pokemon) {
      const moveLearnedByLevel = pokemon.moves.filter(
        move =>
          move.version_group_details[0].move_learn_method.name === 'level-up',
      );

      setMoves(moveLearnedByLevel);
    }
  }, [pokemon]);

  useLayoutEffect(() => {
    const getPokemonEvolutionChain = async () => {
      if (pokemonSpecie) {
        await getEvolutionChain(pokemonSpecie.evolution_chain.url);
      }
    };

    getPokemonEvolutionChain();
  }, [pokemonSpecie, getEvolutionChain]);

  return (
    <Container>
      <Header pokemon={pokemon} />
      <Stats pokemon={pokemon} />
      <Attacks moves={moves} />
      <EvolutionChain />
    </Container>
  );
};

export default PokeInfo;

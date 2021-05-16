import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { usePokemon } from 'shared/contexts/pokemon';
import { IPokemon } from 'shared/DTOs/pokemon';

import { Container } from './styles';

interface PokemonProps {
  poke_url: string;
}

const Pokemon = ({ poke_url }: PokemonProps) => {
  const { getSinglePokeData } = usePokemon();
  const history = useHistory();

  const [pokeData, setPokeData] = useState<IPokemon>();

  useLayoutEffect(() => {
    const getPokemonData = async () => {
      if (poke_url) {
        const pokemonRequest = await getSinglePokeData(poke_url || '');

        setPokeData(pokemonRequest);
      }
    };

    getPokemonData();
  }, [poke_url, getSinglePokeData]);

  const handleAccessPokeInfo = useCallback(() => {
    if (pokeData?.name) history.push(`/poke/${pokeData?.name}`);
  }, [history, pokeData]);

  return (
    <Container onClick={handleAccessPokeInfo}>
      <img
        src={
          pokeData?.sprites?.versions['generation-v']['black-white']?.animated
            .front_default ||
          pokeData?.sprites?.versions['generation-v']['black-white']
            ?.front_default
        }
        alt=""
      />
      <span>{pokeData?.name}</span>
    </Container>
  );
};

export default Pokemon;

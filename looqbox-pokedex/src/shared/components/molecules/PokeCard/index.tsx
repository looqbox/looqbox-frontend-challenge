import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { usePokemon } from 'shared/contexts/pokemon';
import { IPokemon, IPokeType } from 'shared/DTOs/pokemon';
import firstLetterToCapital from 'shared/utils/firstLetterToCapital';
import addZeros from 'shared/utils/addZeros';

import PokeType from 'shared/components/atoms/PokeType';
import GetCardIcon from './getCardIcon';
import * as s from './styles';

import { PokeCardProps } from './types';

const PokeCard = ({ poke, loadedPokemon }: PokeCardProps) => {
  const { getSinglePokeData } = usePokemon();
  const history = useHistory();

  const [pokeData, setPokeData] = useState<IPokemon>();
  const [pokeType, setPokeType] = useState<IPokeType>();

  useLayoutEffect(() => {
    const getPokemonData = async () => {
      if (loadedPokemon) {
        setPokeData(loadedPokemon);
        setPokeType(loadedPokemon.types[0].type.name);
      } else {
        const pokemonRequest = await getSinglePokeData(poke?.url || '');

        setPokeData(pokemonRequest);
        setPokeType(pokemonRequest.types[0]?.type?.name);
      }
    };

    getPokemonData();
  }, [poke, loadedPokemon, getSinglePokeData]);

  const handleAccessPokeInfo = useCallback(() => {
    if (pokeData?.name) history.push(`/poke/${pokeData?.name}`);
  }, [history, pokeData]);

  return (
    <s.Container pokeType={pokeType} onClick={handleAccessPokeInfo}>
      <s.InfoSection>
        <s.IndexAndName pokeType={pokeType}>
          <h1>{`#${addZeros(pokeData?.id || '000')}`}</h1>
          <h1>{firstLetterToCapital(pokeData?.name || 'pokemon')}</h1>
        </s.IndexAndName>

        <s.Types>
          {pokeData?.types?.map((type: { type: { name: string } }) => (
            <PokeType type={type.type.name} defaultType={pokeType} />
          ))}
        </s.Types>
      </s.InfoSection>

      <s.FigureIconType pokeType={pokeType}>
        <GetCardIcon type={pokeType} />
      </s.FigureIconType>

      <s.FigurePokeImage>
        <img
          src={pokeData?.sprites?.other['official-artwork']?.front_default}
          alt=""
        />
      </s.FigurePokeImage>
    </s.Container>
  );
};

export default PokeCard;

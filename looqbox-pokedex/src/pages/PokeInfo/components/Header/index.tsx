import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from 'react-icons/io';

import useIsMobile from 'shared/hooks/useIsMobile';
import { IPokemon } from 'shared/DTOs/pokemon';
import addZeros from 'shared/utils/addZeros';

import PokeType from 'shared/components/atoms/PokeType';
import { Container, Types } from './styles';

interface HeaderProps {
  pokemon: IPokemon | undefined;
}

const Header = ({ pokemon }: HeaderProps) => {
  const history = useHistory();
  const isMobile = useIsMobile();

  const handleNavigateToMainPage = useCallback(() => {
    history.push('/');
  }, [history]);

  const navigateToPreviousOrNext = useCallback(
    next => {
      if (next) {
        history.push(
          pokemon?.id === 898 ? '/poke/1' : `/poke/${(pokemon?.id || 1) + 1}`,
        );
      } else {
        history.push(
          pokemon?.id === 1 ? '/poke/898' : `/poke/${(pokemon?.id || 2) - 1}`,
        );
      }
    },
    [history, pokemon],
  );

  return (
    <Container>
      <div className="topbar">
        <button type="button" onClick={handleNavigateToMainPage}>
          Pokedex
        </button>
      </div>

      <section className="poke">
        {!isMobile && (
          <IoIosArrowDropleftCircle
            onClick={() => navigateToPreviousOrNext(false)}
          />
        )}

        <img
          src={
            pokemon?.sprites?.other['official-artwork'].front_default ||
            pokemon?.sprites.front_default
          }
          alt=""
        />

        {!isMobile && (
          <IoIosArrowDroprightCircle
            onClick={() => navigateToPreviousOrNext(true)}
          />
        )}
      </section>

      <Types>
        {pokemon?.types?.map(type => (
          <PokeType
            type={type.type.name}
            defaultType={pokemon?.types[0].type.name}
          />
        ))}
      </Types>

      <h1>{`${pokemon?.name} #${addZeros(pokemon?.id || '000')}`}</h1>
    </Container>
  );
};

export default Header;

import React, { useCallback } from 'react';

import { usePokemon } from 'shared/contexts/pokemon';
import PokeCard from 'shared/components/molecules/PokeCard';
import ButtonLoadMore from 'shared/components/molecules/ButtonLoadMore';

import NotFound from './NotFound';
import { Container, List } from './styles';

const PokeList = () => {
  const {
    pokes,
    getPokes,
    currentPage,
    setCurrentPage,
    loadingPokes,
    singlePokemon,
    pokemonNotFound,
  } = usePokemon();

  const handleLoadMore = useCallback(() => {
    getPokes(currentPage + 1);
    setCurrentPage(currentPage + 1);
  }, [getPokes, setCurrentPage, currentPage]);

  return (
    <Container>
      {pokemonNotFound ? (
        <NotFound />
      ) : singlePokemon ? (
        <PokeCard loadedPokemon={singlePokemon} />
      ) : (
        <>
          <List>
            {pokes?.map(poke => (
              <PokeCard poke={poke} key={poke.name} />
            ))}
          </List>
          <ButtonLoadMore onLoad={handleLoadMore} isLoading={loadingPokes} />
        </>
      )}
    </Container>
  );
};

export default PokeList;

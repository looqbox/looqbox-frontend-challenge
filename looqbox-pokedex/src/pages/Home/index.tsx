import React, { useLayoutEffect } from 'react';

import { usePokemon } from 'shared/contexts/pokemon';

import { Container } from './styles';

import Header from './components/Header';
import PokeList from './components/PokeList';

const Home = () => {
  const { getPokes } = usePokemon();

  useLayoutEffect(() => {
    getPokes(0);
  }, [getPokes]);

  return (
    <Container>
      <Header />
      <PokeList />
    </Container>
  );
};

export default Home;

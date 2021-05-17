import React from 'react';
import ProgressBar from 'shared/components/molecules/ProgressBar';

import { IPokemon } from 'shared/DTOs/pokemon';

import { Container } from './styles';

interface StatsProps {
  pokemon: IPokemon | undefined;
}

const Stats = ({ pokemon }: StatsProps) => {
  return (
    <Container>
      {pokemon?.stats.map(stat => (
        <section className="stat" key={stat.stat.name}>
          <span>{stat.stat.name.replace('-', ' ').toUpperCase()}</span>
          <ProgressBar percentage={stat.base_stat} />
        </section>
      ))}
    </Container>
  );
};

export default Stats;

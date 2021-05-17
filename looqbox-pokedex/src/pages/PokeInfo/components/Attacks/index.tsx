import React from 'react';
import { IPokeMove } from 'shared/DTOs/pokemon';

import { Container } from './styles';

interface AttacksProps {
  moves: Array<IPokeMove> | undefined;
}

const Attacks = ({ moves }: AttacksProps) => {
  const sortedMoves = moves?.sort((a, b) => {
    return (
      a.version_group_details[0].level_learned_at -
      b.version_group_details[0].level_learned_at
    );
  });

  return (
    <Container>
      <h1>HABILIDADES</h1>

      <section className="moves">
        {sortedMoves?.map(move => (
          <div className="move" key={move.move.name}>
            <span>{move.move.name.replace('-', ' ')}</span>
            <span>{move.version_group_details[0].level_learned_at}</span>
          </div>
        ))}
      </section>
    </Container>
  );
};

export default Attacks;

import React, { useLayoutEffect, useState } from 'react';

import { usePokemon } from 'shared/contexts/pokemon';

import Pokemon from './Pokemon';

import { Container, Title } from './styles';

const EvolutionChain = () => {
  const { evolutionChain } = usePokemon();

  const [firstEvolve, setFirstEvolve] = useState<string>();
  const [midEvolves, setMidEvolves] = useState<string[]>([]);
  const [lastEvolves, setLastEvolve] = useState<string[]>([]);

  useLayoutEffect(() => {
    setFirstEvolve(evolutionChain?.chain?.species?.name);

    evolutionChain?.chain?.evolves_to?.forEach((evolve: any) => {
      setMidEvolves(prevState => {
        return [...prevState, evolve.species.name];
      });

      setLastEvolve(prevState => {
        return [
          ...prevState,
          ...evolve.evolves_to.map(
            (lastEvolve: any) => lastEvolve.species.name,
          ),
        ];
      });
    });

    return () => {
      setFirstEvolve('');
      setMidEvolves([]);
      setLastEvolve([]);
    };
  }, [evolutionChain]);

  return (
    <Container>
      <Title>Cadeia de evolução</Title>

      <section className="chain">
        <Pokemon poke_url={`/pokemon/${firstEvolve}`} />

        {midEvolves?.map(
          evolve => evolve && <Pokemon poke_url={`/pokemon/${evolve}`} />,
        )}

        {lastEvolves?.map(
          evolve => evolve && <Pokemon poke_url={`/pokemon/${evolve}`} />,
        )}
      </section>
    </Container>
  );
};

export default EvolutionChain;

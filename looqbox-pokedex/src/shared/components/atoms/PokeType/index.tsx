import React from 'react';

import { SingleType } from './styles';

interface PokeTypeProps {
  type: string;
  defaultType: string | undefined;
}

const PokeType = ({ type, defaultType }: PokeTypeProps) => {
  return (
    <SingleType type="button" pokeType={defaultType || type}>
      {type.toUpperCase()}
    </SingleType>
  );
};

export default PokeType;

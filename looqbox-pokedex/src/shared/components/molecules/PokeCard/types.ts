import { IPokemon, IPokeType } from 'shared/DTOs/pokemon';

export interface iconsData {
  ['grass']: Function;
  ['fire']: Function;
  ['water']: Function;
  ['electric']: Function;
  ['bug']: Function;
  ['normal']: Function;
  ['poison']: Function;
  ['ground']: Function;
  ['fairy']: Function;
  ['fighting']: Function;
  ['psychic']: Function;
  ['ghost']: Function;
  ['rock']: Function;
  ['ice']: Function;
  ['dark']: Function;
  ['dragon']: Function;
  ['steel']: Function;
}

export interface CardProps {
  type?: IPokeType;
}

export interface PokeCardProps {
  poke?: {
    name?: string | undefined;
    url: string | undefined;
  };
  loadedPokemon?: IPokemon | undefined;
}

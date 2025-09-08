import type { PokemonProps } from './pokemon.type';

type ResultProps = { image: string } & PokemonProps;

export interface PokemonListResponseProps {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResultProps[];
}

import type { PokemonListResponseProps } from '../pokemon-list';

export type HomeViewProps = {
  isFetching: boolean;
  data: Array<PokemonListResponseProps['results'][0]>;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
};

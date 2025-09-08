import type { Dispatch, SetStateAction } from 'react';
import type { DeviceType } from '../device.type';
import type { PokemonDetailProps } from '../pokemon-detail.type';
import type { NavigateFunction } from 'react-router-dom';

/**
 * @type Contrato entre view e model da página de detalhes
 */
export type DetailsViewProps = {
  device: DeviceType;
  secondaryPokemon: PokemonDetailProps | undefined;
  mainPokemon: PokemonDetailProps | undefined;
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  name: string;
  pokemonFromCompare: string | null;
  navigate: NavigateFunction;
};

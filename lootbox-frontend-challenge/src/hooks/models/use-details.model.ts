import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { DetailsViewProps } from '../../models/types/views/details-view.type';
import { usePokemonStore } from '../../models/zustand/pokemon.store';
import { useDevice } from '../device';
import { useDetailsPokemonByName as detailsPokemonByName } from '../queries/details-pokemon';

export const useDetailModel = (): DetailsViewProps => {
  const params = useParams();
  const navigate = useNavigate();
  const name = params.pokemon as string;

  const { pokemonFromCompare } = usePokemonStore();
  const [openModal, setOpenModal] = useState(false);

  const { data: mainPokemon } = detailsPokemonByName({
    searchName: name,
    isOpen: !!name,
  });

  const { data: secondaryPokemon } = detailsPokemonByName({
    searchName: pokemonFromCompare,
    isOpen: !!pokemonFromCompare,
  });

  const device = useDevice();

  return {
    device,
    secondaryPokemon,
    mainPokemon,
    openModal,
    setOpenModal,
    name,
    pokemonFromCompare,
    navigate,
  };
};

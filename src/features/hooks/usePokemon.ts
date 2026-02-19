import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { clearSelected, fetchPokemonByName } from '../pokemon/pokemonSlice';

export function usePokemon() {
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useAppDispatch();
  const { selected: pokemon, loadingDetails } = useAppSelector(
    (state) => state.pokemon
  );

  const fetchPokemonDetails = async (name: string) => {
    try {
      setModalOpen(true);
      await dispatch(fetchPokemonByName(name)).unwrap();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    dispatch(clearSelected());
  };

  return {
    pokemon,
    loadingDetails,
    modalOpen,
    fetchPokemonDetails,
    closeModal,
  };
}

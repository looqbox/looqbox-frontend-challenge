import { useEffect, useMemo, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import {
  clearTypeFilter,
  fetchPokemonByName,
  fetchPokemons,
  fetchPokemonsByType,
} from '../pokemon/pokemonSlice';
import type {
  PokemonListItem,
  PokemonTypeResponse,
} from '../pokemon/pokemonTypes';

function filterPokemons(
  list: PokemonListItem[],
  search: string
): PokemonListItem[] {
  if (!search.trim()) return list;

  const term = search.toLowerCase().trim();

  return list.filter((p) => {
    const nameMatch = p.name.toLowerCase().includes(term);
    const id = p.url.split('/').filter(Boolean).pop() ?? '';
    const idMatch = id === term;

    return nameMatch || idMatch;
  });
}

export function usePokemonList() {
  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();
  const { list, filteredByType, typeFilter, loadingList, error } =
    useAppSelector((state) => state.pokemon);

  useEffect(() => {
    if (list.length === 0 && !typeFilter) {
      dispatch(fetchPokemons());
    }
  }, [dispatch, list.length, typeFilter]);

  useEffect(() => {
    if (!search.trim() || typeFilter) return;

    const term = search.toLowerCase().trim();
    const found = list.some((p) => {
      const id = p.url.split('/').filter(Boolean).pop() ?? '';
      return p.name.toLowerCase().includes(term) || id === term;
    });

    if (!found) {
      const debounce = setTimeout(() => {
        dispatch(fetchPokemonByName(term));
      }, 500); // aguarda o usuário parar de digitar

      return () => clearTimeout(debounce);
    }
  }, [search, list, dispatch, typeFilter]);

  // Handler para clicar no tipo
  const handleTypeClick = (type: string) => {
    if (typeFilter === type) {
      // Se clicar no mesmo tipo, remove o filtro
      dispatch(clearTypeFilter());
    } else {
      // Busca pokémons desse tipo
      dispatch(fetchPokemonsByType(type));
      setSearch(''); // Limpa busca por nome
    }
  };

  // Usa lista filtrada por tipo OU lista completa
  const baseList = typeFilter ? filteredByType : list;

  const filteredList = useMemo(
    () => filterPokemons(baseList, search),
    [baseList, search]
  );

  return {
    list: filteredList,
    loadingList,
    error,
    search,
    setSearch,
    selectedType: typeFilter, // ← para NavBar saber qual tipo está ativo
    onTypeClick: handleTypeClick, // ← callback para NavBar
  };
}

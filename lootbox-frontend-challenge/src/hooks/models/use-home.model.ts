import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePokemonStore } from '../../models/zustand/pokemon.store';
import { useListPokemon } from '../queries/list-pokemon.query';
import { usePokemonByName } from '../queries/pokemon-by-name.query';
import type { HomeViewProps } from '../../models/types/views/home-view.type';

export const useHomeModel = (): HomeViewProps => {
  const [offset, setOffset] = useState(0);
  const { litsPokemon, appendLitsPokemon } = usePokemonStore();

  const [searchParams] = useSearchParams();
  const searchName = searchParams.get('name');

  const { data: responsePokemon, isFetching: isFetchingList } = useListPokemon({
    limit: 50,
    offset,
  });

  useEffect(() => {
    appendLitsPokemon(responsePokemon?.results ?? []);
  }, [responsePokemon, appendLitsPokemon]);

  const { data: apiResult, isFetching: isFetchingAPI } = usePokemonByName({
    searchName: searchName ?? null,
  });

  const filteredLocal = useMemo(() => {
    if (!searchName) return [];
    return litsPokemon.filter((p) => p.name.toLowerCase().includes(searchName.toLowerCase()));
  }, [searchName, litsPokemon]);

  useEffect(() => {
    if (apiResult && !filteredLocal.length) appendLitsPokemon([apiResult]);
  }, [apiResult, appendLitsPokemon, filteredLocal]);

  const data = useMemo(
    () => (searchName ? filteredLocal : litsPokemon),
    [searchName, filteredLocal, litsPokemon],
  );

  const isFetching = useMemo(
    () => isFetchingList || isFetchingAPI,
    [isFetchingList, isFetchingAPI],
  );
  return {
    isFetching,
    data,
    setOffset,
  };
};

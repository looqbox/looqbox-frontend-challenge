import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/app/hooks';

import { fetchPokemons } from '../pokemon/pokemonSlice';

export function usePokemonPagination() {
  const dispatch = useAppDispatch();

  const { list, loadingList, pagination } = useAppSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    dispatch(fetchPokemons({ limit: 10, offset: 0 }));
  }, [dispatch]);

  const handlePageChange = (page: number, pageSize: number) => {
    const offset = (page - 1) * pageSize;

    dispatch(fetchPokemons({ limit: pageSize, offset }));
  };

  return {
    listPagination: list,
    loadingPagination: loadingList,
    pagination: {
      defaultCurrent: pagination.currentPage,
      pageSize: pagination.pageSize,
      total: pagination.count,
      showSizeChanger: true,
      pageSizeOptions: ['10', '20', '50', '100'],
      onChange: handlePageChange,
    },
  };
}

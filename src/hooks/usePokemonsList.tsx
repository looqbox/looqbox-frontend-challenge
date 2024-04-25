import { Pokemon } from '@/typings/pokemon';
import { getPokemon, getPokemonsList } from '@/utils/api';
import { useQueries, useInfiniteQuery } from '@tanstack/react-query';

export default function usePokemonsList() {
  const { data, isLoading, isFetching, isError, ...rest } = useInfiniteQuery({
    queryFn: getPokemonsList,
    queryKey: ['pokemonsList'],
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      const nextPage = lastPage.length ? allPages.length + 1 : undefined;
      return nextPage;
    },
    retry: false,
    refetchOnWindowFocus: false,
  });

  const pokemonsList = data?.pages.reduce((acc, page) => {
    return [...acc, ...page];
  }, []);

  return useQueries({
    queries: (pokemonsList || []).map((p) => ({
      queryKey: ['pokemon', p.name],
      queryFn: () => getPokemon(p.name),
      retry: false,
      refetchOnWindowFocus: false,
    })),
    combine: (results) => ({
      ...rest,
      data: results.map((result) => result.data) as Pokemon[],
      isLoading: results.some((result) => result.isLoading) || isLoading,
      isFetching: results.some((result) => result.isFetching) || isFetching,
      isError: results.some((result) => result.isError) || isError,
    }),
  });
}

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toPositiveInt } from '../../../shared/utils/numbers';
import { buildPokemonListSearchParams } from '../../../shared/utils/searchParams';

type Options = {
  withPage: boolean;
  defaultPage?: number;
};

/**
 * Centralizes Pokémon list URL state (q, page).
 *
 * Used by:
 * - Home (search only)
 * - Pokemons (search + pagination)
 *
 * Keeps input state in sync with URL navigation (back/forward).
 */
export function usePokemonListQueryParams(options: Options) {
  const { withPage, defaultPage = 1 } = options;

  const [searchParams, setSearchParams] = useSearchParams();

  const qParam = searchParams.get('q') ?? '';
  const pageParam = withPage ? toPositiveInt(searchParams.get('page'), defaultPage) : defaultPage;

  const [inputValue, setInputValue] = useState(qParam);

  useEffect(() => {
    setInputValue(qParam);
  }, [qParam]);

  function submit(next: string) {
    const q = next.trim();

    if (!withPage) {
      setSearchParams(buildPokemonListSearchParams({ q }));
      return;
    }

    setSearchParams(buildPokemonListSearchParams({ q, page: defaultPage }));
  }

  function clear() {
    if (!withPage) {
      setSearchParams(buildPokemonListSearchParams({}));
      return;
    }
    setSearchParams(buildPokemonListSearchParams({ page: defaultPage }));
  }

  function setPage(nextPage: number) {
    if (!withPage) return;
    setSearchParams(buildPokemonListSearchParams({ q: qParam, page: nextPage }));
  }

  return {
    qParam,
    pageParam,
    inputValue,
    setInputValue,
    submit,
    clear,
    setPage,
  };
}

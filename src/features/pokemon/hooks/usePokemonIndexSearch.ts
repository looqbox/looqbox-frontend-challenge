import { useMemo } from 'react';
import type { PokemonIndexItem } from '../../../services/pokeapi';
import { normalizeText } from '../../../shared/utils/normalizeText';

type Params = {
  index: PokemonIndexItem[];
  query: string;
  page: number;
  pageSize: number;
  defaultLimit?: number;
};

/**
 * Handles local search and pagination over the Pokémon index.
 *
 * Why local and not via PokéAPI?
 * - PokeAPI does not support partial search
 * - Avoids excessive API requests
 * - Keeps UI fast and predictable
 *
 * Modes:
 * - default: returns a limited featured list
 * - search: filters index and paginates results
 */
export function usePokemonIndexSearch({ index, query, page, pageSize, defaultLimit }: Params) {
  const mode = query.trim() ? 'search' : 'default';
  const normalizedQuery = useMemo(() => normalizeText(query), [query]);

  const filtered = useMemo(() => {
    if (mode === 'default') return index;
    if (!normalizedQuery) return [];
    return index.filter((p) => normalizeText(p.name).includes(normalizedQuery));
  }, [index, mode, normalizedQuery]);

  const defaultItems = useMemo(() => {
    if (defaultLimit == null) return [];
    return index.slice(0, defaultLimit);
  }, [index, defaultLimit]);

  const total = mode === 'search' ? filtered.length : index.length;
  const start = (page - 1) * pageSize;
  const paged = useMemo(() => filtered.slice(start, start + pageSize), [filtered, start, pageSize]);
  const hasMoreItems = mode === 'search' ? filtered.length > pageSize : false;

  return {
    mode,
    normalizedQuery,
    filtered,
    total,
    paged,
    defaultItems,
    hasMoreItems,
  };
}

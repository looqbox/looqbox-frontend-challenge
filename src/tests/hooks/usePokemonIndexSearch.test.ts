import { describe, it, expect } from 'vitest';
import { renderHook } from '@testing-library/react';
import { usePokemonIndexSearch } from '../../features/pokemon/hooks/usePokemonIndexSearch';

const index = [
  { id: 1, name: 'bulbasaur', url: '' },
  { id: 2, name: 'ivysaur', url: '' },
  { id: 25, name: 'pikachu', url: '' },
  { id: 26, name: 'raichu', url: '' },
];

describe('usePokemonIndexSearch', () => {
  it('returns default mode when query is empty', () => {
    const { result } = renderHook(() =>
      usePokemonIndexSearch({ index, query: '', page: 1, pageSize: 2, defaultLimit: 2 }),
    );

    expect(result.current.mode).toBe('default');
    expect(result.current.defaultItems).toHaveLength(2);
  });

  it('filters and paginates when query is present', () => {
    const { result } = renderHook(() =>
      usePokemonIndexSearch({ index, query: 'chu', page: 1, pageSize: 1 }),
    );

    expect(result.current.mode).toBe('search');
    expect(result.current.filtered.map((p) => p.name)).toContain('pikachu');
    expect(result.current.total).toBe(result.current.filtered.length);
    expect(result.current.paged).toHaveLength(1);
  });
});

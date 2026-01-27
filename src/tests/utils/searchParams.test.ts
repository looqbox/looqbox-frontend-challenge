import { describe, it, expect } from 'vitest';
import { buildPokemonListSearchParams } from '../../shared/utils/searchParams';

describe('buildPokemonListSearchParams', () => {
  it('omits empty q and keeps page', () => {
    const p = buildPokemonListSearchParams({ q: '', page: 1 });
    expect(p).toEqual({ page: '1' });
  });

  it('sets q and page', () => {
    const p = buildPokemonListSearchParams({ q: 'pi', page: 2 });
    expect(p).toEqual({ q: 'pi', page: '2' });
  });
});

describe('buildPokemonListSearchParams', () => {
  it('omits empty q and keeps page', () => {
    const p = buildPokemonListSearchParams({ q: '', page: 1 });
    expect(p).toEqual({ page: '1' });
  });
});

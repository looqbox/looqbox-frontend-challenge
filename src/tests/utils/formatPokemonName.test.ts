import { describe, it, expect } from 'vitest';
import { formatPokemonName } from '../../shared/utils/formatPokemonName';

describe('formatPokemonName', () => {
  it('capitalizes and replaces dashes', () => {
    expect(formatPokemonName('mr-mime')).toBe('Mr Mime');
  });

  it('keeps hyphen for special names', () => {
    expect(formatPokemonName('ho-oh')).toBe('Ho-Oh');
    expect(formatPokemonName('porygon-z')).toBe('Porygon-Z');
  });

  it('handles empty', () => {
    expect(formatPokemonName('')).toBe('');
  });
});

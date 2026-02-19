import { formatPokemonName } from './formatName';

describe('formatPokemonName', () => {
  it('should capitalize a simple name without hyphens', () => {
    expect(formatPokemonName('pikachu')).toBe('Pikachu');
  });

  it('should replace hyphens with spaces and capitalize each segment', () => {
    expect(formatPokemonName('mr-mime')).toBe('Mr Mime');
    expect(formatPokemonName('tapu-koko')).toBe('Tapu Koko');
  });

  it('should handle multiple hyphens', () => {
    expect(formatPokemonName('ho-oh-legendary')).toBe('Ho Oh Legendary');
  });

  it('should handle empty segments caused by consecutive hyphens', () => {
    // "a--b" => ["a", "", "b"] => "A  B" (two spaces)
    expect(formatPokemonName('a--b')).toBe('A  B');
  });

  it('should return an empty string when input is empty', () => {
    // "" => [""] => "" after join
    expect(formatPokemonName('')).toBe('');
  });

  it('should not normalize inner casing (only the first char of each segment)', () => {
    // the function only uppercases the first character of each segment
    expect(formatPokemonName('cHaRIZard-meGa')).toBe('CHaRIZard MeGa');
  });
});

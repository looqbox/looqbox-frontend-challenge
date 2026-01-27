import { describe, it, expect } from 'vitest';
import { normalizeText } from '../../shared/utils/normalizeText';

describe('normalizeText', () => {
  it('lowercases and trims', () => {
    expect(normalizeText('  Pikachu ')).toBe('pikachu');
  });

  it('removes accents', () => {
    expect(normalizeText('Pókémón')).toBe('pokemon');
  });

  it('handles empty', () => {
    expect(normalizeText('')).toBe('');
  });
});

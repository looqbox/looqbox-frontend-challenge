import { describe, it, expect } from 'vitest';
import { toPositiveInt } from '../../shared/utils/numbers';

describe('toPositiveInt', () => {
  it('returns fallback for null', () => {
    expect(toPositiveInt(null, 1)).toBe(1);
  });

  it('returns fallback for NaN/invalid', () => {
    expect(toPositiveInt('abc', 2)).toBe(2);
  });

  it('floors decimals and keeps positive', () => {
    expect(toPositiveInt('3.9', 1)).toBe(3);
  });

  it('returns fallback for <= 0', () => {
    expect(toPositiveInt('0', 5)).toBe(5);
    expect(toPositiveInt('-10', 5)).toBe(5);
  });
});

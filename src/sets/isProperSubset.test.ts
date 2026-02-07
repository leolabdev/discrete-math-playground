import { describe, it, expect } from 'vitest';
import { isProperSubset } from './isProperSubset';

describe('isProperSubset (⊂)', () => {
  it('A ⊂ B when A is strictly smaller than B', () => {
    const A = new Set([1, 2]);
    const B = new Set([1, 2, 3]);

    expect(isProperSubset(A, B)).toBe(true);
  });

  it('A ⊂ A is false', () => {
    const A = new Set([1, 2, 3]);

    expect(isProperSubset(A, A)).toBe(false);
  });

  it('Not a proper subset if A is not subset of B', () => {
    const A = new Set([1, 2]);
    const B = new Set([2, 3]);

    expect(isProperSubset(A, B)).toBe(false);
  });

  it('Empty set is a proper subset of non-empty set', () => {
    const A = new Set<number>();
    const B = new Set([1]);

    expect(isProperSubset(A, B)).toBe(true);
  });
});

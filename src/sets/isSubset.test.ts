import { describe, it, expect } from 'vitest';
import { isSubset } from './isSubset';

describe('isSubset (⊆)', () => {
  it('A ⊆ B when all elements of A are in B', () => {
    const A = new Set([1, 2]);
    const B = new Set([1, 2, 3]);

    expect(isSubset(A, B)).toBe(true);
  });

  it('A ⊆ A is true', () => {
    const A = new Set([1, 2, 3]);

    expect(isSubset(A, A)).toBe(true);
  });

  it('A ⊆ B is false if B misses an element', () => {
    const A = new Set([1, 2]);
    const B = new Set([1]);

    expect(isSubset(A, B)).toBe(false);
  });

  it('Empty set is subset of any set', () => {
    const A = new Set<number>();
    const B = new Set([1, 2]);

    expect(isSubset(A, B)).toBe(true);
  });
});

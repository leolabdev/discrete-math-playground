import { describe, it, expect } from 'vitest';
import type { Relation } from './relation';
import { isReflexive } from './isReflexive';

describe('isReflexive', () => {
  it('true when all (a,a) are present', () => {
    const A = new Set([1, 2, 3]);
    const R: Relation<number, number> = new Set([
      [1, 1], [2, 2], [3, 3],
      [1, 2],
    ]);

    expect(isReflexive(A, R)).toBe(true);
  });

  it('false when some (a,a) is missing', () => {
    const A = new Set([1, 2, 3]);
    const R: Relation<number, number> = new Set([
      [1, 1], [2, 2],
      [1, 2],
    ]);

    expect(isReflexive(A, R)).toBe(false);
  });

  it('edge case: empty A is reflexive (vacuously true)', () => {
    const A = new Set<number>();
    const R: Relation<number, number> = new Set();

    expect(isReflexive(A, R)).toBe(true);
  });
});

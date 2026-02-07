import { describe, it, expect } from 'vitest';
import type { Relation } from './relation';
import { isTransitive } from './isTransitive';

describe('isTransitive', () => {
  it('true for a transitive relation', () => {
    const A = new Set([1, 2, 3]);
    // 1→2 and 2→3 implies 1→3 (included)
    const R: Relation<number, number> = new Set([
      [1, 2],
      [2, 3],
      [1, 3],
    ]);

    expect(isTransitive(A, R)).toBe(true);
  });

  it('false when (a,c) is missing for some (a,b) and (b,c)', () => {
    const A = new Set([1, 2, 3]);
    // 1→2 and 2→3 but missing 1→3
    const R: Relation<number, number> = new Set([
      [1, 2],
      [2, 3],
    ]);

    expect(isTransitive(A, R)).toBe(false);
  });

  it('edge case: empty relation is transitive', () => {
    const A = new Set([1, 2, 3]);
    const R: Relation<number, number> = new Set();

    expect(isTransitive(A, R)).toBe(true);
  });
});

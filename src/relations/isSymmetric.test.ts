import { describe, it, expect } from 'vitest';
import type { Relation } from './relation';
import { isSymmetric } from './isSymmetric';

describe('isSymmetric', () => {
  it('true when every (a,b) has (b,a)', () => {
    const R: Relation<number, number> = new Set([
      [1, 2], [2, 1],
      [2, 3], [3, 2],
      [1, 1],
    ]);

    expect(isSymmetric(R)).toBe(true);
  });

  it('false when some (a,b) misses (b,a)', () => {
    const R: Relation<number, number> = new Set([
      [1, 2],
      [2, 3], [3, 2],
    ]);

    expect(isSymmetric(R)).toBe(false);
  });

  it('empty relation is symmetric', () => {
    const R: Relation<string, string> = new Set();
    expect(isSymmetric(R)).toBe(true);
  });
});

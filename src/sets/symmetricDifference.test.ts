import { describe, it, expect } from 'vitest';
import { symmetricDifference } from './symmetricDifference';

describe('symmetricDifference', () => {
  it('A △ B contains elements that are only in one set', () => {
    const A = new Set([1, 2, 3, 4]);
    const B = new Set([3, 4, 5, 6]);

    // Expected: {1,2,5,6}
    expect([...symmetricDifference(A, B)]).toEqual([1, 2, 5, 6]);
  });

  it('A △ A is empty', () => {
    const A = new Set([10, 20]);

    expect([...symmetricDifference(A, A)]).toEqual([]);
  });
});

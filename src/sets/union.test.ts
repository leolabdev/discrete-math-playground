import { describe, it, expect } from 'vitest';
import { union } from './union';

describe('union', () => {
  it('A ∪ B contains elements from both sets without duplicates', () => {
    const A = new Set([1, 2, 3]);
    const B = new Set([3, 4]);

    // Expected: {1,2,3,4} (order in Set iteration is insertion order)
    expect([...union(A, B)]).toEqual([1, 2, 3, 4]);
  });

  it('union with empty set returns the other set (as a new Set)', () => {
    const A = new Set<number>();
    const B = new Set([7, 8]);

    expect([...union(A, B)]).toEqual([7, 8]);
  });
});

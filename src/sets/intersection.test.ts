import { describe, it, expect } from 'vitest';
import { intersection } from './intersection';

describe('intersection', () => {
  it('A ∩ B contains only common elements', () => {
    const A = new Set([1, 2, 3, 4]);
    const B = new Set([3, 4, 5]);

    expect([...intersection(A, B)]).toEqual([3, 4]);
  });

  it('intersection with empty set is empty', () => {
    const A = new Set([1, 2]);
    const B = new Set<number>();

    expect([...intersection(A, B)]).toEqual([]);
  });
});

import { describe, it, expect } from 'vitest';
import { difference } from './difference';

describe('difference', () => {
  it('A \\ B', () => {
    const A = new Set([1, 2, 3, 4]);
    const B = new Set([3, 4]);

    expect([...difference(A, B)]).toEqual([1, 2]);
  });
});

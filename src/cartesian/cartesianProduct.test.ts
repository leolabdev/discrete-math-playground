import { describe, it, expect } from 'vitest';
import { cartesianProduct, type Pair } from './cartesianProduct';

describe('cartesianProduct (×)', () => {
  it('A × B contains all ordered pairs [a, b]', () => {
    const A = new Set([1, 2]);
    const B = new Set(['x', 'y']);

    const result = cartesianProduct(A, B);
    const asArray = [...result].map(([a, b]) => `${a}:${b}`);

    // Expected pairs: (1,x), (1,y), (2,x), (2,y)
    expect(asArray).toEqual(['1:x', '1:y', '2:x', '2:y']);
  });

  it('Cardinality: |A × B| = |A| · |B|', () => {
    const A = new Set([1, 2, 3]);
    const B = new Set(['a', 'b']);

    const result = cartesianProduct(A, B);

    expect(result.size).toBe(A.size * B.size);
  });

  it('A × ∅ is empty, ∅ × B is empty', () => {
    const A = new Set([1, 2]);
    const B = new Set(['x']);
    const empty = new Set<number>();

    expect(cartesianProduct(A, new Set()).size).toBe(0);
    expect(cartesianProduct(empty, B).size).toBe(0);
  });

  it('Order matters: A × B is not the same as B × A (in general)', () => {
    const A = new Set([1, 2]);
    const B = new Set(['x']);

    const AxB = [...cartesianProduct(A, B)].map(([a, b]) => `${a}:${b}`);
    const BxA = [...cartesianProduct(B, A)].map(([b, a]) => `${b}:${a}`);

    // Same "string format", but constructed from different products
    expect(AxB).toEqual(['1:x', '2:x']);
    expect(BxA).toEqual(['x:1', 'x:2']);
  });
});

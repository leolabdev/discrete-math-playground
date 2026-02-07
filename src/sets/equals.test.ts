import { describe, it, expect } from 'vitest';
import { equals } from './equals';

describe('equals (=)', () => {
  it('Sets with same elements are equal (order does not matter)', () => {
    const A = new Set([1, 2, 3]);
    const B = new Set([3, 2, 1]);

    expect(equals(A, B)).toBe(true);
  });

  it('Different sizes are not equal', () => {
    const A = new Set([1, 2]);
    const B = new Set([1, 2, 3]);

    expect(equals(A, B)).toBe(false);
  });

  it('Empty sets are equal', () => {
    const A = new Set<number>();
    const B = new Set<number>();

    expect(equals(A, B)).toBe(true);
  });

  it('One empty and one non-empty set are not equal', () => {
    const A = new Set<number>();
    const B = new Set([1]);

    expect(equals(A, B)).toBe(false);
  });
});

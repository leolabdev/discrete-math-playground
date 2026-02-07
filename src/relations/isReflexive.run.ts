import type { Relation } from './relation';
import { isReflexive } from './isReflexive';

const A = new Set([1, 2, 3]);
const R: Relation<number, number> = new Set([
  [1, 1], [2, 2], [3, 3],
  [1, 2],
]);

console.log('Reflexive?', isReflexive(A, R));

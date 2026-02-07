import type { Relation } from './relation';
import { isTransitive } from './isTransitive';

const A = new Set([1, 2, 3]);
const R: Relation<number, number> = new Set([
  [1, 2],
  [2, 3],
  [1, 3],
]);

console.log('Transitive?', isTransitive(A, R));

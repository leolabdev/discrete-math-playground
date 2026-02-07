import type { Relation } from './relation';
import { isSymmetric } from './isSymmetric';

const R: Relation<number, number> = new Set([
  [1, 2], [2, 1],
  [2, 3], [3, 2],
]);

console.log('Symmetric?', isSymmetric(R));

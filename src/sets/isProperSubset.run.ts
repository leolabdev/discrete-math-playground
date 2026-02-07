import { isProperSubset } from './isProperSubset';

const A = new Set([1, 2]);
const B = new Set([1, 2, 3]);

console.log('A ⊂ B =', isProperSubset(A, B));

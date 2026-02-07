import { union } from './union';

const A = new Set([1, 2, 3]);
const B = new Set([3, 4]);

console.log('A ∪ B =', [...union(A, B)]);

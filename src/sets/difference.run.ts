import { difference } from './difference';

const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4]);

console.log('A \\ B =', [...difference(A, B)]);

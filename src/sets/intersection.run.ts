import { intersection } from './intersection';

const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5]);

console.log('A ∩ B =', [...intersection(A, B)]);

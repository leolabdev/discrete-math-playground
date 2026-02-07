import { symmetricDifference } from './symmetricDifference';

const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

console.log('A △ B =', [...symmetricDifference(A, B)]);

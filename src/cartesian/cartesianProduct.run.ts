import { cartesianProduct } from './cartesianProduct';

const A = new Set([1, 2]);
const B = new Set(['x', 'y']);

const result = cartesianProduct(A, B);

console.log('A × B =', [...result]);
console.log('|A × B| =', result.size);

import { equals } from './equals';

const A = new Set([1, 2, 3]);
const B = new Set([3, 2, 1]);
const C = new Set([1, 2]);

console.log('A = B ?', equals(A, B)); // true
console.log('A = C ?', equals(A, C)); // false

/**
 * Union of sets: A ∪ B
 * Returns a new Set containing all elements that are in A or in B.
 */
export function union<T>(A: Set<T>, B: Set<T>): Set<T> {
  return new Set([...A, ...B]);
}

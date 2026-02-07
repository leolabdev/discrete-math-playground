/**
 * Intersection of sets: A ∩ B
 * Returns a new Set containing elements that are in BOTH A and B.
 */
export function intersection<T>(A: Set<T>, B: Set<T>): Set<T> {
  return new Set([...A].filter(x => B.has(x)));
}

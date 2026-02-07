/**
 * Cartesian product of sets: A × B
 *
 * A × B = { (a, b) | a ∈ A, b ∈ B }
 *
 * Returns a new Set of ordered pairs (tuples) [a, b].
 */
export type Pair<A, B> = [A, B];

export function cartesianProduct<A, B>(A: Set<A>, B: Set<B>): Set<Pair<A, B>> {
  const result = new Set<Pair<A, B>>();
  for (const a of A) {
    for (const b of B) {
      result.add([a, b]);
    }
  }

  return result;
}

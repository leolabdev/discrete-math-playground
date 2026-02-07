/**
 * Symmetric difference of sets: A △ B
 * Elements that are in exactly one of the sets (XOR).
 *
 * Formal: A △ B = (A \\ B) ∪ (B \\ A)
 */
export function symmetricDifference<T>(A: Set<T>, B: Set<T>): Set<T> {
  return new Set([
      ...[...A].filter(a => !B.has(a)),
      ...[...B].filter(b => !A.has(b)),
      ])
}

import {isSubset} from "./isSubset";

/**
 * Equality of sets: A = B
 * Returns true if A and B contain exactly the same elements.
 *
 * Formal:
 * A = B ⇔ (A ⊆ B) ∧ (B ⊆ A)
 */
export function equals<T>(A: Set<T>, B: Set<T>): boolean {
  return A.size === B.size && isSubset(A, B) && isSubset(B, A);
}

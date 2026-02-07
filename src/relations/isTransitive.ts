import type { Relation } from './relation';

/**
 * Transitive relation on A: R ⊆ A × A is transitive iff ∀a,b,c:
 * (a,b) ∈ R and (b,c) ∈ R ⇒ (a,c) ∈ R
 *
 * Note: For correct checking you typically need the domain A (or to infer it).
 * We'll pass A explicitly.
 */
export function isTransitive<T>(A: Set<T>, R: Relation<T, T>): boolean {
  // TODO: implement
  throw new Error('Not implemented');
}

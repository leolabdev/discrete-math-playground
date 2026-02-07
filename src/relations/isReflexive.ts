import type { Relation } from './relation';

/**
 * Reflexive relation on A: R ⊆ A × A is reflexive iff ∀a∈A: (a,a) ∈ R
 */
export function isReflexive<T>(A: Set<T>, R: Relation<T, T>): boolean {
  // TODO: implement
  throw new Error('Not implemented');
}

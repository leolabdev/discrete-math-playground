import type { Relation } from './relation';

/**
 * Symmetric relation on A: R ⊆ A × A is symmetric iff ∀a,b∈A:
 * (a,b) ∈ R ⇒ (b,a) ∈ R
 */
export function isSymmetric<T>(R: Relation<T, T>): boolean {
  // TODO: implement
  throw new Error('Not implemented');
}

/**
 * Subset: A ⊆ B
 * Returns true if every element of A is contained in B.
 */
export function isSubset<T>(A: Set<T>, B: Set<T>): boolean {
  for (const a of A) {
    if (!B.has(a)) return false;
  }
  return true;
}

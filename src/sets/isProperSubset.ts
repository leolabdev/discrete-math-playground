import {isSubset} from "./isSubset";

/**
 * Proper subset: A ⊂ B
 * Returns true if A is a subset of B AND A is not equal to B.
 */
export function isProperSubset<T>(A: Set<T>, B: Set<T>): boolean {
    return isSubset(A, B) && A.size < B.size;
}

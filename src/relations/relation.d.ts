/**
 * Relation R ⊆ A × B is a set of ordered pairs.
 * In code we represent a pair as a tuple [a, b].
 */
export type Pair<A, B> = [A, B];
export type Relation<A, B> = Set<Pair<A, B>>;

export function difference<T>(A: Set<T>, B: Set<T>): Set<T> {
  return new Set([...A].filter(x => !B.has(x)));
}

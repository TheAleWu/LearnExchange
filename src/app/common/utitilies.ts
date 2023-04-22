export function castTo<T>(): (x: any) => T {
  return (x) => x as T;
}

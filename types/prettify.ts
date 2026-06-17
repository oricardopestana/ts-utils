export type Prettify<T> = {
  [K in key of T]: T[K];
} & {};

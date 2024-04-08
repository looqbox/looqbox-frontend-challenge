export type Metadata<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};

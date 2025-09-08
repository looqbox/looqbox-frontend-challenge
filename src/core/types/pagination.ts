export type PaginationQueryBase = {
  limit?: number;
  offset?: number;
};

export type PaginationResponseBase<T> = {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
};

export type Metadata<T> = {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
};

export type Result = {
  name: string;
  url: string;
};

export type Pagination = {
  page: number;
  pageSize: number;
};

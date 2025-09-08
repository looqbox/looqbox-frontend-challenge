import { useState } from "react";
import { QueryKey, useQuery, UseQueryResult } from "@tanstack/react-query";
import { PaginationResponseBase } from "../types/pagination";

type UseLazyQueryCore<P, T> = [
  (params: P) => void,
  UseQueryResult<PaginationResponseBase<T>, unknown>,
];

type UseQueryCoreProps<P, T> = {
  path: string;
  key: QueryKey;
  service: (
    path: string,
    params: P | null
  ) => Promise<PaginationResponseBase<T>>;
  initialData: PaginationResponseBase<T>;
};

const defaultInitialData: PaginationResponseBase<never> = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

/**
 * A core hook for creating lazy-loaded paginated queries.
 *
 * @template P - The type of parameters accepted by the query
 * @template T - The type of data returned in the pagination response
 *
 * @param props - Configuration options for the lazy query
 * @param props.path - The API endpoint path
 * @param props.key - React Query cache key
 * @param props.service - Service function that performs the API call
 * @param props.initialData - Initial pagination data before the query is executed
 *
 * @returns A tuple containing:
 * - A function to trigger the query with parameters
 * - The React Query result object
 *
 * @example
 * ```typescript
 * const [fetchData, query] = useLazyQueryCore({
 *   path: '/api/items',
 *   key: ['items'],
 *   service: fetchItemsService,
 *   initialData: { count: 0, next: null, previous: null, results: [] }
 * });
 *
 * // Later, trigger the query
 * fetchData({ limit: 20, offset: 0 });
 * ```
 */

export function useLazyQueryCore<P, T>({
  path,
  key,
  service,
  initialData = defaultInitialData,
}: UseQueryCoreProps<P, T>): UseLazyQueryCore<P, T> {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [queryParams, setQueryParams] = useState<P | null>(null);

  const query = useQuery({
    queryKey: [key, queryParams],
    queryFn: () => {
      return service(path, queryParams);
    },
    initialData,
    enabled: enabled,
  });

  const enableQuery = (params: P) => {
    setQueryParams(params);
    setEnabled(true);
  };

  return [enableQuery, query];
}

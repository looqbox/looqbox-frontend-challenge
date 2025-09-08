import { QueryKey, useQuery } from "@tanstack/react-query";
import { notification } from "antd";
import { AxiosError } from "axios";
import i18next from "i18next";

type UseQueryCoreProps<T> = {
  path: string;
  key: QueryKey;
  enabled?: boolean;
  service: (path: string) => Promise<T>;
  initialData?: T;
  refetchOnWindowFocus?: boolean;
};
/**
 * A core hook for creating queries with authentication.
 *
 * @template T - The type of data returned by the query
 *
 * @param props - Configuration options for the query
 * @param props.path - The API endpoint path
 * @param props.key - React Query cache key
 * @param props.enabled - React Query enabled
 * @param props.service - Service function that performs the authenticated API call
 * @param props.initialData - Optional initial data before the query executes
 *
 * @returns The React Query result object
 *
 * @example
 * ```typescript
 * const { data, isLoading } = useQueryCore({
 *   path: '/api/items',
 *   key: ['items'],
 *   service: fetchItemsService,
 *   initialData: []
 * });
 * ```
 */

export function useQueryCore<T>({
  path,
  key,
  service,
  enabled = true,
  initialData = undefined,
  refetchOnWindowFocus = false,
}: UseQueryCoreProps<T>) {
  return useQuery<T | undefined>({
    queryKey: key,
    queryFn: async () => {
      return service(path);
    },
    initialData,
    retry: false,
    refetchOnWindowFocus,
    enabled,
    throwOnError: (e) => {
      const err = e as AxiosError;

      notification.error({
        message: i18next.t(`common.errors.${err.status?.toString() ?? "500"}`),
        className: "bg-red-300 rounded-md",
        description: i18next.t(
          `common.errors.${err.response?.data ?? "Internal Server Error"}`
        ),
        placement: "topRight",
      });
      return false;
    },
  });
}

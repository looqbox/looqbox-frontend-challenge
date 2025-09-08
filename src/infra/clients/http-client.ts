import axios, { type AxiosRequestConfig } from "axios";

import { times } from "../../core/constants/times.constant";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 3 * times.MINUTES,
});

export function httpClient<Req = unknown, Res = unknown>({
  token,
  config = {},
}: {
  token?: string;
  config?: AxiosRequestConfig<Req>;
}) {
  return instance<Res>({
    ...config,
    headers: {
      ...(config.headers ?? {}),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
  });
}

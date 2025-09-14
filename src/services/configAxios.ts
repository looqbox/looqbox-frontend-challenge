import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';
import { POKEAPI_BASE_URL } from './config';

export const http = axios.create({
  baseURL: POKEAPI_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

http.interceptors.request.use((config) => {
  const method = (config.method ?? 'get').toUpperCase();
  console.log(`[HTTP] ${method} ${config.baseURL ?? ''}${config.url ?? ''}`);
  return config;
});

http.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error),
);

export async function getData<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const res = await http.get<T>(url, config);
  return res.data;
}

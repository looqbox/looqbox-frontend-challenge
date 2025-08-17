import axios, { AxiosError } from "axios"

type Props = {
    endpoint: string,
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    data?: object
}

const BASE_URL = 'https://pokeapi.co/api/v2'

export const api = async <TData>({
    endpoint,
    method = 'GET',
    data
}: Props): Promise<TData> => {
    const instance = axios.create({
        baseURL: BASE_URL
    })

    const endpointWithoutSlash = endpoint.endsWith('/') ? endpoint.slice(0, -1) : endpoint;

    try {
        const request = await instance<TData>(endpointWithoutSlash, {
            method,
            params: method == 'GET' && data,
            data: method != 'GET' && data
        })

        return request.data as TData
    } catch (error) {
        const e = error as AxiosError<TData | null>
        const detail = e.message || 'Ocorreu um erro inesperado';
        return Promise.reject(detail);
    }
} 
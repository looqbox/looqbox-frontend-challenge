import axios, { AxiosRequestConfig } from 'axios'

async function getInstance() {
  const baseURL = import.meta.env.VITE_PUBLIC_ENDPOINT

  if (typeof baseURL !== 'string') {
    throw new Error('Invalid baseURL')
  }

  let headers = {}

  const instance = axios.create({
    baseURL,
    headers
  })

  return instance
}

export async function get(endpoint: string) {
  const axios = await getInstance()

  try {
    const res = await axios.get(endpoint)
    return res
  } catch (error: any) {
    throw error.response
  }
}

export async function post(endpoint: string, data: any) {
  const axios = await getInstance()

  try {
    const res = await axios.post(endpoint, data)
    return res
  } catch (error: any) {
    throw error.response
  }
}

export async function put(endpoint: string, data: any) {
  const axios = await getInstance()

  try {
    const res = await axios.put(endpoint, data)
    return res
  } catch (error: any) {
    throw error.response
  }
}

export async function del(endpoint: string) {
  const axios = await getInstance()

  try {
    const res = await axios.delete(endpoint)
    return res
  } catch (error: any) {
    throw error.response
  }
}

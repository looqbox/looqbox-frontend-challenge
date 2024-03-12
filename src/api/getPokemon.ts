import { api } from '@/lib/axios'

export async function getPokemon(value: number) {
  await api.get(`/${value}`)
}

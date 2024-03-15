import { SearchFormTypes } from '@/components/search'
import { api } from '@/lib/axios'

// Function that encapsulates Axios, while typing values used during the request.
// 'get' method always makes a query; 'post', 'put' and 'delete' make a mutation.
export async function searchPokemon(value: string) {
  await api.get<SearchFormTypes>(`/pokemon/${value}`)
}

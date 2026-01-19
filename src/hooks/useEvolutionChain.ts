import { useQuery } from '@tanstack/react-query'
import { getEvolutionChain } from '../api/getEvolutionChain'

export const useGetEvolutionChain = (url: string) => {
  return useQuery({
    queryKey: ['evolutionChain', url],
    queryFn: () => getEvolutionChain(url)
  })
}

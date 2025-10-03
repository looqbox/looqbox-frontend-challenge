import { useQuery } from '@tanstack/react-query'
import { getPokemonMove, type MoveDetail } from '../api/moves'

export function usePokemonMovesDetails(url: string) {
  return useQuery<MoveDetail, Error>({
    queryKey: ['move', url],
    queryFn: () => getPokemonMove(url),
    enabled: !!url,
  })
}

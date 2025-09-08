import { useQueries } from '@tanstack/react-query';
import { getMove } from '../../services/pokemonService';
import type { Move } from '../../types/move';

export function useMoves(urls: string[]) {
  const results = useQueries({
    queries: urls.map((url) => ({
      queryKey: ['move', url],
      queryFn: () => getMove(url),
      enabled: Boolean(url),
    })),
  });

  const data = results.map((r) => r.data).filter(Boolean) as Move[];

  return { data };
}

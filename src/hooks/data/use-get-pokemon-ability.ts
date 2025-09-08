import { useQueries } from '@tanstack/react-query';
import { getAbility } from '../../services/pokemonService';
import type { Ability } from '../../types/ability';

export function useAbilities(urls: string[]) {
  const queries = useQueries({
    queries: urls.map((url) => ({
      queryKey: ['ability', url],
      queryFn: () => getAbility(url),
      enabled: !!url,
    })),
  });

  return {
    data: queries.map((q) => q.data).filter(Boolean) as Ability[],
    queries,
  };
}

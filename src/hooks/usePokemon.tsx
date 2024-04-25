import { getPokemon } from '@/utils/api';
import { useQuery } from '@tanstack/react-query';

export default function usePokemon({ name, enabled = true }: { name: string; enabled?: boolean }) {
  return useQuery({
    queryFn: () => getPokemon(name),
    queryKey: ['pokemon', name],
    enabled: enabled,
    retry: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
}

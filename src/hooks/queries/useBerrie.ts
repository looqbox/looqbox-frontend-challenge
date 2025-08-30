import { getBerries, getBerryByIdOrName, getBerryFirmnessByIdOrName, getBerryFlavorByIdOrName } from '@/api';
import { useQuery } from '@tanstack/react-query';

export function useListBerries() {
	return useQuery({
		queryKey: ['berries'],
		queryFn: getBerries,
	});
}

export function useGetBerry(idOrName: string | number) {
	return useQuery({
		queryKey: ['berry', idOrName],
		queryFn: () => getBerryByIdOrName(idOrName),
		enabled: !!idOrName,
	});
}

export function useGetBerryFirmness(idOrName: string | number) {
	return useQuery({
		queryKey: ['berry-firmness', idOrName],
		queryFn: () => getBerryFirmnessByIdOrName(idOrName),
		enabled: !!idOrName,
	});
}

export function useGetBerryFlavor(idOrName: string | number) {
	return useQuery({
		queryKey: ['berry-flavor', idOrName],
		queryFn: () => getBerryFlavorByIdOrName(idOrName),
		enabled: !!idOrName,
	});
}

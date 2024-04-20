import { useQuery } from 'react-query';

import useAPI from '../../useAPI';

export const useAdvisor = (params: any) => {
	const { get } = useAPI<any>(``);
	
	return useQuery(
		{
			queryKey: [ 'pokemon', params ],
			queryFn: () => get({ label: 'Pokemons' }),
			retry: 2
		}
	);
};
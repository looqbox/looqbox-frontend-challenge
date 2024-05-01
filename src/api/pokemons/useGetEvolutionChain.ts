import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';
import { IChain, IChainData } from '../../types/models';

interface IProps {
  endPoint: string,
  enabled: boolean
};

const handleChain = (chain: IChain) => {
	const evolutionChain = [];
	let currentStage: IChain | null = chain;
	
	while (currentStage) {
		const pokemonName = currentStage.species.name;

		evolutionChain.push(pokemonName);
	
		if (currentStage.evolves_to.length > 0) {
			currentStage = currentStage.evolves_to[0];
		} else {
			currentStage = null;
		}
	}

	return evolutionChain;
};

const getEvolutionChain = async (endPoint: string): Promise<string[]> => {
	try {
		const response: AxiosResponse<IChainData> = await api.get(endPoint);
		const chainData = response.data.chain;
		const chain = handleChain(chainData);

		return chain;
	} catch(error) {
		toast.error('Ops! We didnt find this specie.', { toastId: 'species-error' });
		throw new Error('Error finding species');
	}
}; 

export const useGetEvolutionChain = ({endPoint, enabled}: IProps) => {
	
	return useQuery({
		enabled: enabled,
		queryKey: [QUERY_KEYS.EVOLUTION_CHAINS, endPoint],
		queryFn: () => getEvolutionChain(endPoint)
	});
};
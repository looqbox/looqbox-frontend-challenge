import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import { AxiosResponse } from 'axios';

import { QUERY_KEYS } from '../query-keys';
import api from '../base';
import { ISpeciesData } from '../../types/models';

interface IProps {
    endPoint: string,
    enabled: boolean
}

const getPokemonSpecies = async (endPoint: string): Promise<ISpeciesData> => {
	try {
		const response: AxiosResponse<ISpeciesData> = await api.get(endPoint);
		const pokemon = response.data;
		return pokemon;
	} catch(error) {
		toast.error('Ops! We didnt find this specie.', { toastId: 'species-error' });
		throw new Error('Error finding species');
	}
}; 

export const useGetPokemonSpecies = ({endPoint, enabled}: IProps) => {
	
	return useQuery({
		enabled: enabled,
		queryKey: [QUERY_KEYS.SPECIES, endPoint],
		queryFn: () => getPokemonSpecies(endPoint)
	});
};
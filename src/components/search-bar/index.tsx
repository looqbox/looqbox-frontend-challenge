import { AutoComplete, Input } from 'antd';

import { IPokemon, IPokemonList } from '../../types/models';
import { useGetAllPokemons } from '../../api/pokemons/useGetAllPokemons';

import './styles.css';
import { ISearchOption } from '../../types';
import { useState } from 'react';
import { getPokemonsDetails } from '../../util/helpers';

export interface IValues {
	search: string;
	options?: ISearchOption[];
	formatedPokemons: IPokemon[];
};
export interface ISearchBarProps {
	onSelect: (value: string) => void;
	onSubmit: (values: IValues) => void;
	setIsLoading: (value: boolean) => void;
};

const SearchBar = (props: ISearchBarProps) => {
	const [values, setValues] = useState<IValues>({
		search: '',
		options: [],
		formatedPokemons: []
	});

	const { data: pokemons } = useGetAllPokemons();

	const { onSelect, onSubmit, setIsLoading } = props;

	const handleSearch = async (value: string) => {
		const filteredPokemons = pokemons?.filter((pokemon: IPokemonList) => pokemon.name.startsWith(value.toLowerCase())) || [];
		const optionResults = value ? filteredPokemons.map((pokemon: IPokemonList) => ({ label: pokemon.name, value: pokemon.url })) : [];
		
		setIsLoading(true);
		const pokemonsDetails = await getPokemonsDetails(filteredPokemons);
		setIsLoading(false);

		setValues({search: value, options: optionResults, formatedPokemons: pokemonsDetails});

		if(!value) onSubmit({search: '', formatedPokemons: []});
	};

	return (
		<AutoComplete
			popupMatchSelectWidth={252}
			style={{
				width: 320,
			}}
			options={values.options}
			onSelect={(_, option) => onSelect(option.label)}
			onSearch={handleSearch}
			className='search-bar'
		>
			<Input.Search 
				size="large" 
				placeholder="Search for pokemons" 
				enterButton  
				onPressEnter={() => onSubmit(values)}
				onSearch={() => onSubmit(values)}
			/>
		</AutoComplete>
	);
};

export default SearchBar;
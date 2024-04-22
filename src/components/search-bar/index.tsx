import { useState } from 'react';
import { AutoComplete, Input } from 'antd';
import axios from 'axios';

import './styles.css';

const SearchBar = () => {
	const [options, setOptions] = useState<any>([]);

	const fetchPokemons = async (query: any) => {
		try {
			const response = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000');
			const pokemons = response.data.results;
			const filteredPokemons = pokemons.filter((pokemon: any) => pokemon.name.startsWith(query.toLowerCase()));
			return filteredPokemons.map((pokemon: any) => ({ value: pokemon.name, label: pokemon.name }));
		} catch (error) {
			console.error('Error fetching Pokemon:', error);
			return [];
		}
	};

	const handleSearch = async (value: any) => {
		const results = value ? await fetchPokemons(value.toLowerCase()) : [];
		setOptions(results);
	};

	return (
		<AutoComplete
			popupMatchSelectWidth={252}
			style={{
				width: 300,
			}}
			options={options}
			// onSelect={onSelect}
			onSearch={handleSearch}
			className='search-bar'
		>
			<Input.Search size="large" placeholder="Search for pokemons" enterButton />
		</AutoComplete>
	);
};

export default SearchBar;
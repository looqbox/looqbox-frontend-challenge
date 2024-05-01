import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';

import PokemonsList from '../../components/pokemons-list';
import PokemonsListLoader from '../../components/pokemons-list-loader';
import SearchBar from '../../components/search-bar';

import { useGetPokemons } from '../../api/pokemons/useGetPokemons';
import { IPokemon } from '../../types/models';

import logo from '../../assets/images/gray-pokeball.svg';

import './styles.css';
export interface IValues {
	search: string;
	formatedPokemons: IPokemon[];
};

export default function HomePage() {
	const { data: pokemonPages, fetchNextPage, isFetchingNextPage } = useGetPokemons();
	const { ref, inView } = useInView();
	const navigate = useNavigate();

	const [values, setValues] = useState<IValues>({
		search: '',
		formatedPokemons: []
	});
	const [isSearchLoading, setIsSearchLoading] = useState(false);

	useEffect(() => {
		if(inView && !values.search) setTimeout(fetchNextPage, 600);
	}, [fetchNextPage, inView]);

	const handleRenderedList = values.search ? [values.formatedPokemons] : pokemonPages?.pages;

	return (
		<section>
			<div className="tags-list-container">
				<div className="container">
					<h1>What Pokemon <br></br>are you looking for ?</h1>
					<SearchBar
						onSelect={(pokemon) => navigate('/pokemon/' + pokemon)}
						onSubmit={setValues}
						setIsLoading={setIsSearchLoading}
					/>
				</div>
				<img src={logo} alt='Gray gray-pokeball' className='gray-pokeball-background'/>
			</div>
			<div className="container pokemons-list-container">
				{handleRenderedList?.map((page: IPokemon[], index) => (
					<PokemonsList
						key={'page-' + index}
						pokemons={page}
					/>
				))}
			</div>
			<div ref={ref} className='container infinite-scroll-anchor' >{(isFetchingNextPage || isSearchLoading) && <PokemonsListLoader/>}</div>
		</section>
	);
}
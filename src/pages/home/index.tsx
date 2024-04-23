import PokemonsList from '../../components/pokemons-list';
import logo from '../../assets/images/gray-pokeball.svg';
import SearchBar from '../../components/search-bar';

import { useGetPokemons } from '../../api/pokemons/useGetPokemons';

import './styles.css';

export default function HomePage() {
	const { data: pokemons, isLoading } = useGetPokemons(0);
	console.log(pokemons);
	
	return (
		<section>
			<div className="tags-list-container">
				<div className="container">
					<h1>What Pokemon <br></br>are you looking for ?</h1>
					<SearchBar/>
				</div>
				<img src={logo} alt='Gray gray-pokeball' className='gray-pokeball-background'/>
			</div>
			<div className="container pokemons-list-container">
				<PokemonsList
					pokemons={pokemons || []}
					isLoading={isLoading}
				/>
			</div>
		</section>
	);
}
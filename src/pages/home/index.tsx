import PokemonsList from '../../components/pokemons-list';
import logo from '../../assets/images/gray-pokebox.svg';
import SearchBar from '../../components/search-bar';

import './styles.css';

export default function HomePage() {

	return (
		<section>
			<div className="tags-list-container">
				<div className="container">
					<h1>What Pokemon <br></br>are you looking for ?</h1>
					<SearchBar/>
				</div>
				<img src={logo} alt='Gray pokebox' className='gray-pokebox-background'/>
			</div>
			<div className="container">
				<PokemonsList/>
			</div>
		</section>
	);
}
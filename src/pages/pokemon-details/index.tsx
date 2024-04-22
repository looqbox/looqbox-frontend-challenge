import { useParams } from 'react-router-dom';
import { useGetPokemon } from '../../api/pokemons/useGetPokemon';

const PokemonDetails = () => {
	const { name } = useParams();
	const {data} = useGetPokemon(name || '');
	console.log(data);
  
	return (
		<div>
			<h1>SHOW</h1>
		</div>
	);
};

export default PokemonDetails;
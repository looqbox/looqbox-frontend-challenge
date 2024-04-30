import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';

import { IPokemon, IPokemonType } from '../../types/models';
import { handleIDToNumber, handlePokemonCardAnimationDelay, handlePokemonTypeColor } from '../../util/helpers';

import background from '../../assets/images/gray-pokeball.svg';

import './styles.css';

interface Iprops {
  pokemon: IPokemon,
  index: number,
  customClass?: string
}

const PokemonCard = (props: Iprops) => {
	const { pokemon, index, customClass } = props;
	const navigate = useNavigate();

	return (
		<button 
			className={`${customClass} pokemon-card`}
			onClick={() => navigate('/pokemon/' + pokemon.name)}
			style={{ 
				backgroundColor: handlePokemonTypeColor(pokemon.types[0].type.name), 
				animationDelay: handlePokemonCardAnimationDelay(index)
			}} 
		>
			<Image src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} className="pokemon-img"/>
			<img src={background} alt="Gray gray-pokeball" className='pokemon-card-background'/>
			<p className='pokemon-number'>{handleIDToNumber(pokemon.id)}</p>
			<h2 className='pokemons-name'>{pokemon.name}</h2>
			<div className='pokemon-types-container'>
				{pokemon.types.map((pokemonType: IPokemonType, index: number) => (
					<span key={`${pokemonType.type.name}-${index}`} className="pokemon-type">{pokemonType.type.name}</span>
				))}
			</div>
		</button>
	);
};

export default PokemonCard;
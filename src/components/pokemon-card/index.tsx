import { Image } from 'antd';
import { useNavigate } from 'react-router-dom';

import { IPokemon, IPokemonType } from '../../types/models';
import { handleIDToNumber, handlePokemonCardAnimationDelay, handlePokemonTypeColor } from '../../util/helpers';

import background from '../../assets/images/gray-pokeball.svg';

import './styles.css';

interface Iprops {
  pokemonName: IPokemon['name'], 
  pokemonTypes: IPokemon['types'], 
  pokemonSprites: IPokemon['sprites'], 
  pokemonID: IPokemon['id'],
  index: number,
  customClass?: string,
}

const PokemonCard = (props: Iprops) => {
	const { pokemonName, pokemonTypes, pokemonSprites, pokemonID, index, customClass } = props;
	const navigate = useNavigate();

	return (
		<button 
			className={`${customClass} pokemon-card`}
			onClick={() => navigate('/pokemon/' + pokemonName)}
			style={{ 
				backgroundColor: handlePokemonTypeColor(pokemonTypes?.length > 0 ? pokemonTypes[0].type.name : 'default'), 
				animationDelay: handlePokemonCardAnimationDelay(index)
			}} 
		>
			<Image src={pokemonSprites.other['official-artwork'].front_default} alt={pokemonName} className="pokemon-img"/>
			<img src={background} alt="Gray gray-pokeball" className='pokemon-card-background'/>
			<p className='pokemon-number'>{handleIDToNumber(pokemonID)}</p>
			<h2 className='pokemons-name'>{pokemonName ? pokemonName : 'Unknown Pokemon'}</h2>
			{pokemonTypes?.length > 0 ? (
				<div className='pokemon-types-container'>
					{pokemonTypes.map((pokemonType: IPokemonType, index: number) => (
						<span key={`${pokemonType.type.name}-${index}`} className="pokemon-type">{pokemonType.type.name}</span>
					))}
				</div>
			) : <span key={`Unknown Type-${index}`} className="pokemon-type">Unknown Type</span>}
		</button>
	);
};

export default PokemonCard;
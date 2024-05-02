import { Image} from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';

import { useGetPokemon } from '../../../../api/pokemons/useGetPokemon';

import pokeBall from '../../../../assets/images/gray-pokeball.svg';

interface IProps {
  pokemonName: string,
  index: number,
  hasArrow: boolean
}

function PokemonEvolutionCard(props: IProps) {
	const { pokemonName, index, hasArrow } = props;
	const {data: pokemon} = useGetPokemon(pokemonName);

	return (
		<div className={'evolution-pokemon-card'} style={{animationDelay: `${index*0.2}s`}}>
			{hasArrow && <SwapRightOutlined style={{fontSize: 40}} className='evolution-direction'/>}
			<img src={pokeBall} alt='Gray pokeball' className='evolution-pokeball-background'/>
			<Image src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name}/>
			<p>{pokemon?.name}</p>
		</div>
	);
}

export default PokemonEvolutionCard;
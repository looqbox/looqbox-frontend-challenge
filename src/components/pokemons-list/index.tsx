import { Col, Row } from 'antd';

import PokemonCard from '../pokemon-card';
import { IPokemon } from '../../types/models';

import notFoundImage from '../../assets/images/not-found.png';

import './styles.css';

interface IProps {
	pokemons: IPokemon[]
}

const PokemonsList = (props: IProps) => {
	const { pokemons } = props;

	const notFound = (
		<div className='not-found-container'>
			<img src={notFoundImage} />
			<h3>Hm... Snorlax não encontrou nenhum pokemon com esse nome!</h3>
		</div>
	);

	return (
		<div className='pokemons-list-wrapper'>
			<Row gutter={[16, 24]}>
				{pokemons.length > 0 
					? pokemons.map((pokemon: IPokemon, index: number) => (
						<Col 
							key={`${pokemon?.name}-${index}`} 
							span={12} 
							lg={8}
						>
							<PokemonCard 
								pokemon={pokemon}
								index={index} 
							/>
						</Col>
					))
					: (
						notFound
					)
				}
			</Row>
		</div>
	);
};

export default PokemonsList;
import { Col, Row } from 'antd';

import PokemonCard from '../pokemon-card';
import { IPokemon } from '../../types/models';

import './styles.css';

interface IProps {
	pokemons: IPokemon[]
}

const PokemonsList = (props: IProps) => {
	const { pokemons } = props;

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
						<p>Nenhum pokemon encontrado</p>
					)
				}
			</Row>
		</div>
	);
};

export default PokemonsList;
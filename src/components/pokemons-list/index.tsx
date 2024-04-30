import { Col, Row } from 'antd';

import PokemonCard from '../pokemon-card';
import PokemonsListLoader from '../pokemons-list-loader';
import { IPokemon } from '../../types/models';

interface IProps {
	pokemons: IPokemon[],
	isLoading: boolean
}

const PokemonsList = (props: IProps) => {
	const { pokemons, isLoading } = props;

	return (
		<div>
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
				{isLoading && <PokemonsListLoader/>}
			</Row>
		</div>
	);
};

export default PokemonsList;
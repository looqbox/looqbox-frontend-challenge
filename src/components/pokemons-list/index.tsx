import { Col, Row } from 'antd';

import PokemonCard from '../pokemon-card';
import { useGetPokemons } from '../../api/pokemons/useGetPokemons';
import PokemonsListLoader from '../pokemons-list-loader';

const PokemonsList = () => {
	const { data: pokemons=[], isLoading } = useGetPokemons(0);

	return (
		<div>
			<Row gutter={[16, 24]}>
				{pokemons?.map((pokemon, index) => (
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
				))}
				{isLoading && <PokemonsListLoader/>}
			</Row>
		</div>
	);
};

export default PokemonsList;
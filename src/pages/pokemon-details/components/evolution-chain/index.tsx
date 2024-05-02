import { Col, Row } from 'antd';

import PokemonEvolutionCard from '../pokemon-evolution-card';

import './styles.css';

interface IProps {
  chain: string[]
}

function EvolutionChain(props: IProps) {
	const { chain } = props;

	return (
		<div className='container evolution-chain-container'>
			<Row gutter={[30, 24]}>      
				{chain.map((pokemonName, index) => (
					<Col 
						key={pokemonName + '-evolutes'} 
						lg={8}
					>
						<PokemonEvolutionCard 
							pokemonName={pokemonName} 
							index={index} 
							hasArrow={index + 1 != chain.length}
						/>
					</Col>
				))}
			</Row>
		</div>
	);
}

export default EvolutionChain;
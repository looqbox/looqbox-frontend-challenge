import { Col, Image, Row } from 'antd';
import { SwapRightOutlined } from '@ant-design/icons';

import { useGetPokemon } from '../../../../api/pokemons/useGetPokemon';

import pokeBall from '../../../../assets/images/gray-pokeball.svg';

import './styles.css';

interface IProps {
  chain: string[]
}

function EvolutionChain(props: IProps) {
  const { chain } = props;

  const pokemonEvolutionList = (pokemonName: string, index: number) => {
    const {data: pokemon} = useGetPokemon(pokemonName);

    return (
      <Col 
        key={pokemonName + '-evolutes'} 
        span={8} 
      >
        <div className={`evolution-pokemon-card`} style={{animationDelay: `${index*0.2}s`}}>
          {index + 1 != chain.length && <SwapRightOutlined style={{fontSize: 40}} className='evolution-direction'/>}
			    <img src={pokeBall} alt='Gray pokeball' className='evolution-pokeball-background'/>
          <Image src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name}/>
          <p>{pokemon?.name}</p>
        </div>
      </Col>
    );
  };

  return (
    <div className='container evolution-chain-container'>
      <Row gutter={[30, 24]}>      
        {chain.map((pokemonName, index) => {
          return pokemonEvolutionList(pokemonName, index)
        })}
      </Row>
    </div>
  )
}

export default EvolutionChain;
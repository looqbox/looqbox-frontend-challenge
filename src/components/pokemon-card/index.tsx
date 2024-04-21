import { Image } from 'antd';

import { IPokemon } from '../../types/models'
import { handlePokemonCardAnimationDelay, handlePokemonTypeColor } from '../../util/helpers';

import background from '../../assets/images/gray-pokebox.svg';

import './styles.css';

interface Iprops {
  pokemon: IPokemon,
  index: number,
  customClass?: string
}

const PokemonCard = (props: Iprops) => {
  const { pokemon, index, customClass } = props;

  return (
    <div 
      className={`${customClass} pokemon-card`}
      style={{ 
        backgroundColor: handlePokemonTypeColor(pokemon?.types[0]), 
        animationDelay: handlePokemonCardAnimationDelay(index)
      }} 
    >
      <Image src={pokemon.image} alt={pokemon.name} className="pokemon-img"/>
      <img src={background} alt="Gray Pokebox" className='pokemon-card-background'/>
      <p className='pokemon-number'>{pokemon.number}</p>
      <h2 className='pokemons-name'>{pokemon.name}</h2>
      <div className='pokemon-types-container'>
        {/* Resolver problema do any */}
        {pokemon?.types?.map((type: any, index) => (
          <span key={index} className="pokemon-type">{type}</span>
        ))}
      </div>
    </div>
  )
}

export default PokemonCard;

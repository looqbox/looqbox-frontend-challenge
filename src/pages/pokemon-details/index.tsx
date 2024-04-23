import { useNavigate, useParams } from 'react-router-dom';
import { Image, Tabs } from 'antd';
import { SwapLeftOutlined } from '@ant-design/icons';

import { useGetPokemon } from '../../api/pokemons/useGetPokemon';
import { handleIDToNumber, handlePokemonTypeColor } from '../../util/helpers';
import { IPokemonType } from '../../types/models';

import pokeball from '../../assets/images/gray-pokeball.svg';

import './styles.css';

const PokemonDetails = () => {
	const { name } = useParams();
	const { data: pokemon } = useGetPokemon(name || '');
	const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

	const tabs = [
		{
			key: 'about-pokemon',
			label: 'About',
			children: 'Content of Tab Pane 1',
		},
		{
			key: '2',
			label: 'Base stats',
			children: 'Content of Tab Pane 2',
		},
		{
			key: '3',
			label: 'Evolution',
			children: 'Content of Tab Pane 3',
		},
		{
			key: '4',
			label: 'Moves',
			children: 'Content of Tab Pane 3',
		},
	];

	return (
		<section style={{backgroundColor: handlePokemonTypeColor(pokemon?.types[0].type.name)}} className='pokemon-details'>
			<img src={pokeball} alt='Gray pokeball' className='pokeball-background'/>
			<div className="pokemon-top-section-wrapper">
				<div className="container">
					<div className="pokemon-top-section">
						<div className='pokemon-top-info-align'>
							<button className='back-button' onClick={handleGoBack}>
								<SwapLeftOutlined style={{fontSize: 40}}/>
							</button>
							<div className='pokemons-name-and-number-container'>
								<p className='pokemons-name'>{pokemon?.name}</p>
								<p className='pokemons-number'>{handleIDToNumber(pokemon?.id || 0)}</p>
							</div>
							<div className='pokemon-types'>
								{pokemon?.types?.map((pokemonType: IPokemonType, index: number) => (
									<span key={index} className="pokemon-type">{pokemonType.type.name}</span>
								))}
							</div>
						</div>
						<div className='pokemon-image-container'>
							<Image src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name} className='pokemon-image'/>
						</div>
					</div>
				</div>
			</div>
			<div className='pokemon-bottom-section'>
				<Tabs defaultActiveKey="1" items={tabs} />;
			</div>
		</section>
	);
};

export default PokemonDetails;
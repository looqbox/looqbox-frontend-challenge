import { useNavigate, useParams } from 'react-router-dom';
import { Image, Progress, Tabs } from 'antd';
import { SwapLeftOutlined } from '@ant-design/icons';

import { useGetPokemon } from '../../api/pokemons/useGetPokemon';
import { convertHeightToFeet, convertWeightToPounds, handleIDToNumber, handlePokemonTypeColor, pickRandPokemonDescriptionText } from '../../util/helpers';
import { IBaseStats, IPokemonType } from '../../types/models';

import pokeball from '../../assets/images/gray-pokeball.svg';

import './styles.css';
import { useGetPokemonSpecies } from '../../api/pokemons/useGetPokemonSpecies';
import { useGetEvolutionChain } from '../../api/pokemons/useGetEvolutionChain';
import EvolutionChain from './components/evolution-chain';

const PokemonDetails = () => {
	const { name } = useParams();
	const { data: pokemon, isLoading: isPokemonLoading } = useGetPokemon(name || '');
	const { data: species, isLoading: isSpeciesLoading } = useGetPokemonSpecies({endPoint: pokemon?.species.url || '', enabled: !isPokemonLoading});
	const { data: evolutions } = useGetEvolutionChain({endPoint: species?.evolution_chain.url || '', enabled: !isSpeciesLoading});

	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	const tabAbout = (
		<div className="container">
			<p className='pokemon-description'>{species && pickRandPokemonDescriptionText(species?.flavor_text_entries)}</p>
			<div className="pokemon-physical-details">
				<div className="pokemon-card-info">
					<h3>Height</h3>
					<p>{convertHeightToFeet(pokemon?.height || 0)}</p>
				</div>
				<div className="pokemon-card-info">
					<h3>Weight</h3>
					<p>{convertWeightToPounds(pokemon?.weight || 0)}</p>
				</div>
			</div>
		</div>
	);

	const tabBaseStats = (
		<div className='container'>
			<div className="pokemon-stats-container">
				{
					pokemon?.stats.map((stat: IBaseStats, index: number) => (
						<div key={index} className="pokemon-stat">
							<p>{stat.stat.name}</p>
							<Progress percent={Math.floor((stat.base_stat / 255) * 100)} status="active" strokeColor={handlePokemonTypeColor(pokemon?.types[0].type.name || 'default')}/>
						</div>
					))
				}
			</div>
		</div>
	);

	const tabEvolution = (
		<div>
			<EvolutionChain 
				chain={evolutions || []}
			/>
		</div>
	);
	
	const tabs = [
		{
			key: 'about-pokemon',
			label: 'About',
			children: tabAbout,
		},
		{
			key: 'base-stats',
			label: 'Base stats',
			children: tabBaseStats,
		},
		{
			key: 'evolution',
			label: 'Evolution',
			children: tabEvolution,
		}
	];

	return (
		<section style={{backgroundColor: handlePokemonTypeColor(pokemon?.types[0].type.name || 'default')}} className='pokemon-details'>
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
				<Tabs defaultActiveKey="base-stats" items={tabs} />;
			</div>
		</section>
	);
};

export default PokemonDetails;
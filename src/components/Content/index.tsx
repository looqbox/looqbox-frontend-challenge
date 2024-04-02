import React, { useEffect } from 'react';
import { Space, Spin } from 'antd';
import {
    StyledContent,
    StyledSearch,
    StyledMain,
    StyledSection,
    StyledCard,
    StyledSpan,
    StyledH3,
    StyledElement,
    StyledPokemon,
    AboutInfoText,
} from './styles';
import typeBug from '../../assets/type-bug.png';
import typeDark from '../../assets/type-dark.png';
import typeDragon from '../../assets/type-dragon.png';
import typeElectric from '../../assets/type-electric.png';
import typeFairy from '../../assets/type-fairy.png';
import typeFighting from '../../assets/type-fighting.png';
import typeFire from '../../assets/type-fire.png';
import typeFlying from '../../assets/type-flying.png';
import typeGhost from '../../assets/type-ghost.png';
import typeGrass from '../../assets/type-grass.png';
import typeGround from '../../assets/type-ground.png';
import typeIce from '../../assets/type-ice.png';
import typeNormal from '../../assets/type-normal.png';
import typePoison from '../../assets/type-poison.png';
import typePhychic from '../../assets/type-psychic.png';
import typeRock from '../../assets/type-rock.png';
import typeSteel from '../../assets/type-steel.png';
import typeWater from '../../assets/type-water.png';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/index';
import { fetchPokemonList, pokemonListReset } from '../../redux/PokemonListReducer';
import { useNavigate } from 'react-router-dom';
import { IPokemon } from '../../interfaces/pokemon-types';
import { pokemonAdd } from '../../redux/PokemonDetailsReducer';
import { getTypesListByPokemon } from '../../services/pokemon-formatter'

const AppContent: React.FC = () => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useAppDispatch();
    const pokemonList = useSelector((state: RootState) => state.pokemonList.pokemons);
    const pokemonListLoading = useSelector((state: RootState) => state.pokemonList.loading);

    const onSearch: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>, info?: { source?: 'clear' | 'input' }) => void = (value, _e, info) => {
        const pokemonName = value
    
        dispatch(pokemonListReset())
        dispatch(fetchPokemonList({name: pokemonName.toLowerCase(), offset: 0, limit: 30}))
    };

    useEffect(() => {
        // 500 was an arbitrary choice of number
        const randomOffset = Math.floor(Math.random() * (500 - 1 + 1) + 1);
        dispatch(fetchPokemonList({offset: randomOffset, limit: 30}))
    }, [dispatch]);

    const handleLoadPokemonDetail = (pokemon: IPokemon) => {
        // Set the Polémon in the state before the navigation, so this way is not necessary to make any other request to get data
        dispatch(pokemonAdd(pokemon))
        navigate(`/details/${pokemon?.name}`);
    }

    return (
        <StyledMain>
            <StyledContent>
                <Space direction="vertical">
                    <StyledSearch
                        placeholder="Catch a Pokémon!"
                        allowClear
                        enterButton="Search"
                        size="large"
                        onSearch={onSearch}
                    />
                </Space>
            </StyledContent>
            {pokemonListLoading ?
                (<div className="loading-spin"> 
                    <Spin size="large" /> 
                </div>)
                : (
                    <StyledSection>
                        {
                            pokemonList.map((pokemon) => (
                                <StyledCard key={pokemon.id}
                                    onClick={(event => handleLoadPokemonDetail(pokemon))}
                                    singleCard={pokemonList.length === 1}
                                    type={getTypesListByPokemon(pokemon)[0] as string}
                                >
                                    <StyledSpan>#{("000" + pokemon?.id).slice(-3)}</StyledSpan>
                                    <StyledH3>{pokemon?.name}</StyledH3>
                                    <StyledElement>
                                        {getTypesListByPokemon(pokemon).map((value: any, index: number) => (
                                            <div key={index}>
                                                {value === 'normal' && <img src={typeNormal} alt="" />}
                                                {value === 'fighting' && <img src={typeFighting} alt="" />}
                                                {value === 'flying' && <img src={typeFlying} alt="" />}
                                                {value === 'poison' && <img src={typePoison} alt="" />}
                                                {value === 'ground' && <img src={typeGround} alt="" />}
                                                {value === 'rock' && <img src={typeRock} alt="" />}
                                                {value === 'bug' && <img src={typeBug} alt="" />}
                                                {value === 'ghost' && <img src={typeGhost} alt="" />}
                                                {value === 'steel' &&  <img src={typeSteel} alt="" />}
                                                {value === 'fire' && <img src={typeFire} alt="" />}
                                                {value === 'water' && <img src={typeWater} alt="" />}
                                                {value === 'grass' && <img src={typeGrass} alt="" />}
                                                {value === 'electric' && <img src={typeElectric} alt="" />}
                                                {value === 'psychic' && <img src={typePhychic} alt="" />}
                                                {value === 'ice' && <img src={typeIce} alt="" />}
                                                {value === 'dragon' && <img src={typeDragon} alt="" />}
                                                {value === 'dark' && <img src={typeDark} alt="" />}
                                                {value === 'fairy' && <img src={typeFairy} alt="" />}
                                                {value === 'unknown' && <img src={typeNormal} alt="" />}
                                                {value === 'shadow' && <img src={typeNormal} alt="" />}
                                            </div>
                                        ))}
                                    </StyledElement>
                                    <StyledPokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon?.id}.svg`} alt="" />
                                </StyledCard>
                            ))
                        }
                    </StyledSection>
                )
            }
            {(!pokemonListLoading && pokemonList.length === 0 ) && 
                <AboutInfoText>
                    Pokémon was not found. Please verify if the data is correct.
                </AboutInfoText>
            }
        </StyledMain>
    );
};

export default AppContent;

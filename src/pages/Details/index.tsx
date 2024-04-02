import React, { useEffect } from 'react';
import {
    MainWrapper,
    DetailsHeaderWrapper,
    DetailsHeader,
    DetailsInfo,
    DetailsImage,
    DetailsText,
    DetailsBodyWrapper,
    DetailsContent,
    StyledElement,
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
import { Tabs, Button, Spin } from 'antd';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import AboutPokemon from '../../components/AboutPokemon';
import StatsPokemon from '../../components/StatsPokemon';
import { useSelector } from 'react-redux';
import { useAppDispatch, RootState, AppDispatch } from '../../redux/index';
import { fetchPokemonDetail } from '../../redux/PokemonDetailsReducer';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { IPokemonDetailsState } from '../../interfaces/pokemon-types';
import { getTypesListByPokemon } from '../../services/pokemon-formatter'

const Details: React.FC = () => {
    const { name } = useParams();

    const dispatch: AppDispatch = useAppDispatch();
    const pokemonDetails = useSelector((state: RootState) => (state.pokemonDetails as IPokemonDetailsState).pokemon);
    const pokemonDetailsLoading = useSelector((state: RootState) => (state.pokemonDetails as IPokemonDetailsState).loading);
    const pokemonDetailsError = useSelector((state: RootState) => (state.pokemonDetails as IPokemonDetailsState).error);

    const navigate = useNavigate();
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        // If url Pokémon data is incorrect, returns to main list
        if (!pokemonDetails && pokemonDetailsError && pokemonDetailsError.length > 0) {
            navigate(`/`);
        }
    }, [pokemonDetailsError]);

    useEffect(() => {
        if(!pokemonDetails) {
            dispatch(fetchPokemonDetail(String(name)))
        }
    }, [dispatch]);

    const handleBack = () => {
        navigate(`/`);
    }

    const items = [
        {
            key: '1',
            label: 'About',
            children: <AboutPokemon />,
            },
            {
            key: '2',
            label: 'Stats',
            children: <StatsPokemon />,
            },
    ];
    
    return(
        <DetailsContent>
            {pokemonDetailsLoading ?
                (<div className="loading-spin"> 
                    <Spin size="large" /> 
                </div>)
                : (
            <MainWrapper>
                <DetailsHeaderWrapper type={getTypesListByPokemon(pokemonDetails)[0] as string}>
                    <DetailsHeader>
                        <Button type="text" size="large" onClick={(event => handleBack())}>
                            <div className="back-button">
                                <ArrowLeftOutlined />
                            </div>
                        </Button>
                        <DetailsInfo>
                            <DetailsImage>
                                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonDetails?.id}.svg`} alt="" />
                            </DetailsImage>
                            <DetailsText>
                                <span>#{("000" + pokemonDetails?.id).slice(-3)}</span>
                                <h3>{pokemonDetails?.name}</h3>
                                <StyledElement>
                                    {getTypesListByPokemon(pokemonDetails).map((value: any, index: number) => (
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
                            </DetailsText>
                        </DetailsInfo>
                    </DetailsHeader>
                </DetailsHeaderWrapper>
                <DetailsBodyWrapper>
                    <Tabs
                        defaultActiveKey="1"
                        centered
                        items={items}
                    />
                </DetailsBodyWrapper>
            </MainWrapper>
            )}
        </DetailsContent>
    );
};

export default Details;

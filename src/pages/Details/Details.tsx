import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import PokemonData from '../../@types/PokemonData';

import pokeAPI from '../../services/api';

import Type from '../../elements/Type/Type';

import { 
    Container,
    Main,
    ReturnIcon,
    Types,
    PokemonPhoto,
    BasicCharacteristics,
    HeightIcon,
    WeightIcon,
    StarsIcon,
    Abilities,
    Box,
    Section,
    Stats,
    Gallery,
    Photos
} from './styles';
import StatsBar from '../../elements/StatsBar/StatsBar';
import Loading from '../../elements/Loading/Loading';

const Details:React.FC = () => {
    const {id} = useParams<string>();

    const [details, setDetails] = useState<PokemonData>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        pokeAPI.get(`pokemon/${id}`).then(({data}) => {
            setDetails(data);
        }).catch(err => {
            console.error(err);
        }).finally(() => {
            setLoading(false);
        });
    }, []);

    return(
        <>
            {loading ? <Loading /> : <React.Fragment/>}
            <Container>
                <Main className={`background-${details?.types[0].type.name}`}>
                    <Link to={"/"}><ReturnIcon /></Link>
                    <br />
                    <span>#{String(details?.id).padStart(3, '0')}</span>
                    <h1>{details?.name}</h1>
                    <Types>
                        {details?.types.map(type => (
                            <Type key={type.type.name} type={type.type.name}/>
                            ))}
                    </Types>

                    <PokemonPhoto src={details?.sprites.other['official-artwork'].front_default} alt={details?.name}/>

                    <BasicCharacteristics>
                        <Box><p><HeightIcon />{details?.height}m</p></Box>
                        <Box><p><WeightIcon />{details?.weight}kg</p></Box>
                        <Box><p><StarsIcon />{details?.base_experience}xp</p></Box>
                    </BasicCharacteristics>

                    <Abilities>
                        <Box>
                            <h2>Abilities:</h2>
                            <ul>
                                {details?.abilities.map(({ability}) => (
                                    <li key={ability.name}>{ability.name}</li>
                                ))}
                            </ul>
                        </Box>
                    </Abilities>

                </Main>

                <Section>
                    <Stats>
                        <h2>Stats</h2>

                        <table>
                            <tbody>
                                {details?.stats.map((stat) => (
                                    <tr key={stat.stat.name}>
                                        <StatsBar key={stat.stat.name} stat_name={stat.stat.name} value={stat.base_stat} />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Stats>

                    <Gallery>
                        <h2>Gallery</h2>

                        <Photos>
                            {/* Default sprites */}
                            {details?.sprites.front_default ?
                            <img
                                src={details?.sprites.front_default} 
                                alt="Front Default"
                                title='Front Default'
                            />
                            :<React.Fragment />}
                            
                            {details?.sprites.back_default ?
                            <img
                                src={details?.sprites.back_default} 
                                alt="Back Default"
                                title="Back Default"
                            />
                            :<React.Fragment />}

                            
                            {/* Default female sprites */}
                            {details?.sprites.front_female ?
                            <img
                                src={details?.sprites.front_female} 
                                alt="Front Default Female"
                                title="Front Default Female"
                            />
                            :<React.Fragment />}
                            
                            {details?.sprites.back_female ?
                            <img
                                src={details?.sprites.back_female} 
                                alt="Back Default Female"
                                title="Back Default Female"
                            />
                            :<React.Fragment />}

                            
                            {/* Shiny sprites */}
                            {details?.sprites.front_shiny ?
                            <img
                                src={details?.sprites.front_shiny} 
                                alt="Front Shiny"
                                title="Front Shiny"
                            />
                            :<React.Fragment />}
                            
                            {details?.sprites.back_shiny ?
                            <img
                                src={details?.sprites.back_shiny} 
                                alt="Back Shiny"
                                title="Back Shiny"
                            />
                            :<React.Fragment />}

                            
                            {/* Shiny female sprites */}
                            {details?.sprites.front_shiny_female ?
                            <img
                                src={details?.sprites.front_shiny_female} 
                                alt="Front Shiny Female"
                                title="Front Shiny Female"
                            />
                            :<React.Fragment />}
                            
                            {details?.sprites.back_shiny_female ?
                            <img
                                src={details?.sprites.back_shiny_female} 
                                alt="Back Shiny Female"
                                title="Back Shiny Female"
                            />
                            :<React.Fragment />}

                            
                            {/* Dream world sprite */}
                            {details?.sprites.other.dream_world.front_default ?
                            <img
                                src={details?.sprites.other.dream_world.front_default} 
                                alt="Dream World Default"
                                title="Dream World Default"
                            />
                            :<React.Fragment />}

                            
                            {/* Dream world female sprite */}
                            {details?.sprites.other.dream_world.front_female ?
                            <img
                                src={details?.sprites.other.dream_world.front_female} 
                                alt="Dream World Female"
                                title="Dream World Female"
                            />
                            :<React.Fragment />}


                            {/* Home default sprite */}
                            {details?.sprites.other.home.front_default ?
                            <img
                                src={details?.sprites.other.home.front_default} 
                                alt="Home Default"
                                title="Home Default"
                            />
                            :<React.Fragment />}
                            
                            
                            {/* Home default female sprite */}
                            {details?.sprites.other.home.front_female ?
                            <img
                                src={details?.sprites.other.home.front_female} 
                                alt="Home Default Female"
                                title="Home Default Female"
                            />
                            :<React.Fragment />}

                            
                            {/* Home shiny sprite */}
                            {details?.sprites.other.home.front_shiny ?
                            <img
                                src={details?.sprites.other.home.front_shiny} 
                                alt="Home Shiny"
                                title="Home Shiny"
                            />
                            :<React.Fragment />}

                            
                            {/* Home shiny female sprite */}
                            {details?.sprites.other.home.front_shiny_female ?
                            <img
                                src={details?.sprites.other.home.front_shiny_female} 
                                alt="Home Shiny Female"
                                title="Home Shiny Female"
                            />
                            :<React.Fragment />}

                        </Photos>
                    </Gallery>
                </Section>

            </Container>
        </>
    );
}

export default Details;
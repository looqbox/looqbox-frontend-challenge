import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PokemonData from '../../@types/PokemonData';

import pokeAPI from '../../services/api';

import Type from '../../elements/Type/Type';

import { 
    Container,
    Main,
    Types,
    PokemonPhoto,
    BasicCharacteristics,
    HeightIcon,
    WeightIcon,
    StarsIcon,
    Abilities,
    Box
} from './styles';

const Details:React.FC = () => {
    const {id} = useParams<string>();

    const [details, setDetails] = useState<PokemonData>();

    useEffect(() => {
        pokeAPI.get(`pokemon/${id}`).then(({data}) => {
            setDetails(data);
        }).catch(err => {
            console.error(err);
        });
    }, []);

    return(
        <Container>
            <Main className={`background-${details?.types[0].type.name}`}>
                <span>#{String(details?.id).padStart(3, '0')}</span>
                <h1>{details?.name}</h1>
                <Types>
                    {details?.types.map(type => (
                        <Type type={type.type.name}/>
                        ))}
                </Types>

                <PokemonPhoto src={details?.sprites.other['official-artwork'].front_default}/>

                <BasicCharacteristics>
                    <p>
                        <Box><HeightIcon />{details?.height}m</Box>
                    </p>
                    <p>
                        <Box><WeightIcon />{details?.weight}kg</Box>
                    </p>
                    <p>
                        <Box><StarsIcon />{details?.base_experience}xp</Box>
                    </p>
                </BasicCharacteristics>

                <Abilities>
                    <Box>
                        <h2>Abilities:</h2>
                        <ul>
                            {details?.abilities.map(({ability}) => (
                                <li>{ability.name}</li>
                            ))}
                        </ul>
                    </Box>
                </Abilities>

            </Main>
        </Container>
    );
}

export default Details;
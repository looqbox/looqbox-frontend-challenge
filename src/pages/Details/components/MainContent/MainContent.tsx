import React from 'react';
import { Link } from 'react-router-dom';

import Type from '../../../../elements/Type/Type';

import {
    ReturnIcon,
    Types,
    PokemonPhoto,
    BasicCharacteristics,
    HeightIcon,
    WeightIcon,
    StarsIcon,
    Abilities,
    Box
} from './styles';

interface Props {
    id: number | undefined;
    name: string | undefined;
    types: [
        {
            type: {
                name: string | undefined;
            };
        }
    ] | undefined;
    photo: string | undefined;
    height: number | undefined;
    weight: number | undefined;
    base_xp: number | undefined;
    abilities: [
        {
            ability: {
                name: string | undefined;
            };
        }
    ] | undefined;
}

const MainContent:React.FC<Props> = ({id, name, types, photo, height, weight, base_xp, abilities}) => {
    return(
        <>
            <Link to={"/"}><ReturnIcon /></Link>
            <br />
            <span>#{String(id).padStart(3, '0')}</span>
            <h1>{name}</h1>
            <Types>
                {types?.map(type => (
                    <Type key={type.type.name} type={type.type.name}/>
                ))}
            </Types>

            <PokemonPhoto src={photo} alt={name}/>

            <BasicCharacteristics>
                <Box><p><HeightIcon />{height}m</p></Box>
                <Box><p><WeightIcon />{weight}kg</p></Box>
                <Box><p><StarsIcon />{base_xp}xp</p></Box>
            </BasicCharacteristics>

            <Abilities>
                <Box>
                    <h2>Abilities:</h2>
                    <ul>
                        {abilities?.map(({ability}) => (
                            <li key={ability.name}>{ability.name}</li>
                        ))}
                    </ul>
                </Box>
            </Abilities>
        </>
    );
}

export default MainContent;
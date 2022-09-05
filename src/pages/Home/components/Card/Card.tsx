import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import pokeAPI from "../../../../services/api";

import PokemonData from "../../../../@types/PokemonData";
import Type from "../../../../elements/Type/Type";
import gif from '../../../../assets/loading.gif';

import { Container, PokemonPhoto, Types } from './styles';

interface Props {
    url: string;
}

const Card: React.FC<Props> = ({url}) =>{
    const [details, setDetails] = useState<PokemonData>();

    useEffect(() => {
        const id = url.substring(34);

        pokeAPI.get(`pokemon/${id}`).then(({data}) => {
            setDetails(data);
        }).catch(err => {
            console.error(err);
        }).finally(() => {
        });
    }, []);

    return(
        <>
            {
                details ? 
                <Container>
                    <Link to={`/details/${details?.id}`}>
                        <p>#{String(details?.id).padStart(3, '0')}</p>
                        <PokemonPhoto 
                            src={details ? details?.sprites.other["official-artwork"].front_default : gif} 
                            alt={details?.name}
                        />
                        <h2>{details?.name}</h2>
                        <Types>
                            {details?.types.map(type => (
                                <Type key={type.type.name} type={type.type.name}/>
                            ))}
                        </Types>
                    </Link>
                </Container> : <React.Fragment />
            }
        </>
    );
}

export default Card;
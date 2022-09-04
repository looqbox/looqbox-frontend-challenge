import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import pokeAPI from "../../../../services/api";

import PokemonData from "../../../../@types/PokemonData";
import Type from "../../../../elements/Type/Type";

import { Container, PokemonPhoto, Types } from './styles';
import Loading from "../../../../elements/Loading/Loading";

interface Props {
    url: string;
}

const Card: React.FC<Props> = ({url}) =>{
    const [details, setDetails] = useState<PokemonData>();
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const id = url.substring(34);

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
            {
                details ? 
                <Container>
                    <Link to={`/details/${details?.id}`}>
                        <p>#{String(details?.id).padStart(3, '0')}</p>
                        <PokemonPhoto 
                            src={details?.sprites.other["official-artwork"].front_default} 
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
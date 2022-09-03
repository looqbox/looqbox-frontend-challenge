import React, { useState, useEffect } from "react";
import pokeAPI from "../../../services/api";

import PokemonData from "../../../@types/PokemonData";
import { Link } from "react-router-dom";

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
        });
    }, []);

    return(
        <Link to={`/details/${details?.id}`}>
          <div>
              <img src={details?.sprites.other["official-artwork"].front_default} alt="" />
              <h2>{details?.name}</h2>
          </div>
        </Link>
    );
}

export default Card;
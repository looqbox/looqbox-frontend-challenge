import React, { useCallback, useEffect, useState } from "react";
import API from "../../../services/API";
import "./styles.css";

export default function MainPokemon(props) {
    const [pokemonData, setPokemonData] = useState();
    const pokemonId = props.id;
    const changeData = props.dataChangerFn;

    const fetchPokemonData = useCallback( async () => {
        await API.get(`pokemon/${pokemonId}`).then(result => {
            setPokemonData(result.data);
        }).catch(e => console.error(e));
    }, [pokemonId]);

    useEffect(() => {
        fetchPokemonData();
    }, [fetchPokemonData]);

    return(
        <>
        {   pokemonData ?
            <li className="mainPokemon" onClick={() => changeData(pokemonData)}>
                <img src={pokemonData.sprites.front_default} alt="Pokémon"/>
                <h2>{pokemonData.name}</h2>
            </li>
            :
            ""
        }
        </>
    );
}
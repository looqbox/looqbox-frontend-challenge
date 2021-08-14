import React, { useEffect, useState } from "react";
import API from "../../../services/API";
import "./styles.css";

export default function PokemonResult(props) {
    const [pokemonData, setPokemonData] = useState();
    const pokemonUrl = props.url;
    const changeData = props.dataChangerFn;

    useEffect(() => {
        fetchPokemonData();
    }, []);

    async function fetchPokemonData() {
        await API.get(pokemonUrl).then(result => {
            setPokemonData(result.data);
        }).catch(e => console.error(e));
    }

    return(
        <>
        {   pokemonData ?
            <li className="listItem" onClick={() => changeData(pokemonData)}>
                <img src={pokemonData.sprites.front_default}/>
                <h2>{pokemonData.name}</h2>
            </li>
            :
            ""
        }
        </>
    );
}
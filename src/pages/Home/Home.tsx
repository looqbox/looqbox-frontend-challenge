import React, { useState, useEffect } from "react";
import pokeAPI from "../../services/api";
import Card from "./components/Card";

const Home:React.FC = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
            pokeAPI.get(`/pokemon/?offset=$20`).then(({data}) => {
                setPokemons(data.results); 
            }).catch((err) => {
                console.log(err.message);
            })
    }, []);

    return(
        <>
            <h1>teste</h1>
            {
                pokemons.map((pokemon: any)  => {
                    return(
                        <Card url={pokemon.url}/>
                    )
                })
            }
        </>
    )
}

export default Home;
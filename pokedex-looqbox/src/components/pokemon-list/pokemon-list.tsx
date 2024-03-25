import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import getPokemons from "../../services/get-pokemons";
import PokemonCard from "../pokemon-card/pokemon-card";
import './pokemon-list.css'
import SearchBar from "../search-bar/search-bar";
import { Button } from "antd";

const PokemonList = () => {

    const [count, setOffset] = useState(10)
    const [pokemonList, setPokemonList] = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const list = await getPokemons(count)
            setPokemonList(list)
        }
        fetchData()

    }, [count])

    return (
        <section className="pokemon-list">
            <SearchBar />
            <ul className="pokemons">
                {pokemonList.map((pokemon: any, index) => (
                    <li className="pokemon" key={index}>
                        <Link to={`/pokemon-details/${pokemon.name}`}>
                            <PokemonCard pokemonName={pokemon.name} />
                        </Link>
                    </li>
                ))}
            </ul>
            <Button className="load-more-button" onClick={() => setOffset(count + 10)}>
                Load More
            </Button>
        </section>
    )
}

export default PokemonList;
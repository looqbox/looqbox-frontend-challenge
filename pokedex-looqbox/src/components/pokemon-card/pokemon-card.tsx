import { useState, useEffect, useContext } from "react";
import getPokemonsDetails from "../../services/get-pokemon-details";
import './pokemon-card.css'
import { ThemeContext } from "../../contexts/theme-context";

const PokemonCard = (props: any) => {

    const { theme } = useContext(ThemeContext)
    const { pokemonName } = props
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPokemonsDetails(pokemonName)
            setPokemon(response)
        }
        fetchData()

    }, [pokemonName])

    return (
        <div className="card" style={theme}>
            <div className="header">
                <h2>{pokemon.name}</h2>
                <p>id #{pokemon.id}</p>
            </div>
            <img className="pokemon-image" alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
            <ul className="pokemon-types" style={theme}>
                {pokemon.types?.map( (element: string, index: number) => {
                    return (
                        <li className="pokemon-type" key={index}>
                            {element.type?.name}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PokemonCard;
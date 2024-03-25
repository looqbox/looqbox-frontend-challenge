import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Link, useParams } from "react-router-dom";
import getPokemonsDetails from "../../services/get-pokemon-details";
import PokemonAbilities from "../pokemon-abilities/pokemon-abilities";
import './pokemon-details.css'

const PokemonsDetails = (props: string) => {

    const { theme } = useContext(ThemeContext);
    const [pokemon, setPokemon] = useState({});
    const { name } = useParams() || props

    useEffect( () => {

        const fetchData = async () => {
            const card = await getPokemonsDetails(name)
            setPokemon(card)
        }
        fetchData();
    }, [name])


    return (
        <div className="pokemon-details">
            <Link className="return" to='/'>Voltar para a página inicial</Link>

            <div className="pokemon-card" style={theme}>
                <h2 className="pokemon-name">{pokemon.name}</h2>
                <p>id #{pokemon.id}</p>
                <img className="image-detail" alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
                <div>
                    <h3>Type(s)</h3>
                    <ul className="types">
                        {pokemon.types?.map((element, index) => {
                            return (
                                <li key={index}>
                                    {element.type?.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h3>Abilities</h3>
                    <ul className="abilities">
                        {pokemon.abilities?.slice(0,5).map((element, index) => {
                            return (
                                <li key={index}>
                                    <PokemonAbilities abilitiesUrl={element.ability?.url} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div>
                    <h3>Moves</h3>
                    <ul className="moves">
                        {pokemon.moves?.slice(0, 10).map((element, index) => {
                            return (
                                <li key={index}>
                                    {element.move?.name}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export { PokemonsDetails }
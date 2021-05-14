//This component assembles the grid of the cards
import Spinner from '../Spinner/Spinner'
import PokemonItem from '../PokemonItem/PokemonItem'
import './PokemonGrid.css'

const PokemonGrid = ({ pokemons, isLoading }) => {
    return isLoading ?
        <Spinner /> : //if it isn't loading no more, do it:
            <section className="cards">
                {pokemons.map(pokemon => (
                    <PokemonItem key={pokemon.id} pokemon={pokemon} />
                ))}
            </section>
}

export default PokemonGrid
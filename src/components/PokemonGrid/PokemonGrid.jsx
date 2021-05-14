import Spinner from '../Spinner/Spinner'
import PokemonItem from '../PokemonItem/PokemonItem'
import './PokemonGrid.css'

const PokemonGrid = ({ pokemons, isLoading }) => {
    return isLoading ?
        <Spinner /> :
            <section className="cards">
                {pokemons.map(pokemon => (
                    <PokemonItem key={pokemon.id} pokemon={pokemon} />
                ))}
            </section>
}

export default PokemonGrid
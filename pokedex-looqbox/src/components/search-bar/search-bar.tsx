import { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context';
import getPokemonsDetails from '../../services/get-pokemon-details';
import { Link } from 'react-router-dom';
import './search-bar.css';
import { Button } from 'antd';
import { Input } from 'antd';

const SearchBar = () => {

    const { theme } = useContext(ThemeContext)
    const [searchPokemon, setSearch] = useState("")
    const [pokemon, setPokemon] = useState([])
    const [showCard, setShowCard] = useState(false)

    const handleOnChange = (e: any) => {
        setSearch(e.target.value)
    }

    const handleOnClick = () => {
        const fetchData = async () => {
            const response = await getPokemonsDetails(searchPokemon)
            setPokemon(response)
            setShowCard(true)
        }
        fetchData()
    }

    const handleOnKeyUp = (event: any) => {
        const key = event.which || event.keyCode
        const isEnterKeyPressed = key === 13

        if (isEnterKeyPressed) {
            const fetchData = async () => {
                const response = await getPokemonsDetails(searchPokemon)
                setPokemon(response)
            }
            fetchData()
            setShowCard(true)
        }
    }

    return (
        <div className='search-bar'>
            <div className='search-button-input'>
                <Input className='name-pokemon' placeholder=" Pokémon name or ID" onChange={handleOnChange} onKeyUp={handleOnKeyUp} />
                <Button className='search-pokemon' onClick={handleOnClick}>Search</Button>
            </div>
            {pokemon ? (
                <Link to={`/pokemon-details/${pokemon.name}`}>
                    <div className={showCard ? 'searched' : 'not-searched'} id='search-card' style={theme}>
                        <h2>{pokemon.name}</h2>
                        <img alt={pokemon.name} src={pokemon.sprites?.other.dream_world.front_default} />
                    </div>
                </Link>
            ) : null}
        </div>
    )
}

export default SearchBar;
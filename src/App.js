import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import PokemonGrid from './components/PokemonGrid/PokemonGrid'
import PagesButtons from './components/PagesButtons/PagesButtons'
import './App.css'

function App() {

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/`
  const [searchTerm, setSearchTerm] = useState('') //are used to obtain the value entered by the user in the search bar, when we type we store this event through the constant (HandleChange)
  const [searchResults, setSearchResults] = useState([]) //returns pokemons in a filtered way according to the search
  const [currentPageUrl, setCurrentPageUrl] = useState(`${apiUrl}`) //is where the website's current url is stored
  const [nextPage, setNextPage] = useState() //that loads more data
  const [pokemons, setPokemons] = useState([]) //returns us the list of API Pokémon
  const [isLoading, setIsLoading] = useState(true) //they are just to check if the API is loading and returns a loading gif

  const handleChange = event => {
    setSearchTerm(event.target.value)
  }

  useEffect(() => {
    const fetchPokemons = async () => { //is an asynchronous function that consumes the data from the current API url and returns a JSON, through the function 

      const res = await fetch(`${currentPageUrl}`)
      const data = await res.json()

      setNextPage(data.next)
      setIsLoading(false)

      const createPokemonObject = (result) => { //it pass that JSON to an object and store the value in the constant state (pokemons)
        result.forEach(
          async (poke) => {
            const res = await fetch(`${apiUrl}${poke.name}`)
            const data = await res.json()

            setPokemons(currentList => [...currentList, data])
          })
      }
      createPokemonObject(data.results)
    }
    fetchPokemons()

    const results = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) //is used to filter the results according to the entered value then we store the values ​​in an array
    setSearchResults(results)

  }, [apiUrl, currentPageUrl, pokemons, searchTerm])

  const goToNextPage = () => setCurrentPageUrl(nextPage)

  return (
    <div className="container">
      <Header />
      <Search value={searchTerm} onChange={handleChange} />
      <PokemonGrid key={searchResults} pokemons={searchResults} isLoading={isLoading} />
      <PagesButtons
        goToNextPage={nextPage ? goToNextPage : null}
      />
    </div>
  )
}

export default App
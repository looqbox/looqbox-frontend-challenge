import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import PokemonGrid from './components/PokemonGrid/PokemonGrid'
import PagesButtons from'./components/PagesButtons/PagesButtons'
import './App.css'

function App() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl)
  const [pokemons, setPokemons] = useState([])
  const [prevPage, setPrevPage] = useState()
  const [nextPage, setNextPage] = useState()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => { 
    const fetchPokemons = async () => {
      const pokemonsData = await axios(currentPageUrl)

      setPokemons(pokemonsData.data.results.map(p => p.name))
      setPrevPage(pokemonsData.data.previous)
      setNextPage(pokemonsData.data.next)
      setIsLoading(false)
    }
    fetchPokemons()
  }, [currentPageUrl])

  const goToPrevPage = () => setCurrentPageUrl(prevPage)
  const goToNextPage = () => setCurrentPageUrl(nextPage)

  return (
    <div className="container">
        <Header />
        <Search />
        <PokemonGrid pokemons={pokemons} isLoading={isLoading}/>
          <PagesButtons
            goToPrevPage={prevPage ? goToPrevPage : null}
            goToNextPage={nextPage ? goToNextPage : null}
          />
    </div>
  )
}

export default App
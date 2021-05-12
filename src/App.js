import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import PokemonList from './components/PokemonList'
import PagesButtons from'./components/PagesButtons'
import './App.css'

function App() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl)
  const [pokemon, setPokemon] = useState([])
  const [prevPage, setPrevPage] = useState()
  const [nextPage, setNextPage] = useState()

  useEffect(() => {
    Axios.get(currentPageUrl).then(response => {
      setPokemon(response.data.results.map(p => p.name ))
      setPrevPage(response.data.previous)
      setNextPage(response.data.next)
    })
  }, [currentPageUrl])

  const goToPrevPage = () => setCurrentPageUrl(prevPage)
  const goToNextPage = () => setCurrentPageUrl(nextPage)

  return (
    <div>
      <PokemonList pokemon={pokemon} />
      <PagesButtons 
        goToPrevPage={prevPage ? goToPrevPage : null}
        goToNextPage={nextPage ? goToNextPage : null}
      />
    </div>
  )
}

export default App

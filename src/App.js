import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PokemonGrid from './components/PokemonGrid'
import PagesButtons from'./components/PagesButtons'
import './App.css'

function App() {
  const apiUrl = 'https://pokeapi.co/api/v2/pokemon'

  const [currentPageUrl, setCurrentPageUrl] = useState(apiUrl)
  const [pokemons, setPokemons] = useState([])
  const [prevPage, setPrevPage] = useState()
  const [nextPage, setNextPage] = useState()

  useEffect(() => { 
    const fetchPokemons = async () => {
      const result = await axios(currentPageUrl)

      setPokemons(result.data.results.map(p => p.name))
      setPrevPage(result.data.previous)
      setNextPage(result.data.next)
    }
    fetchPokemons()
  }, [currentPageUrl])

  const goToPrevPage = () => setCurrentPageUrl(prevPage)
  const goToNextPage = () => setCurrentPageUrl(nextPage)

  return (
    <div className="container">
        {console.log(pokemons)}
        <PokemonGrid pokemons={pokemons} />
        <PagesButtons 
          goToPrevPage={prevPage ? goToPrevPage : null}
          goToNextPage={nextPage ? goToNextPage : null}
        />
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react'
import Header from './components/Header/Header'
import Search from './components/Search/Search'
import PokemonGrid from './components/PokemonGrid/PokemonGrid'
import PagesButtons from './components/PagesButtons/PagesButtons'
import './App.css'

function App() {

  const [query, setQuery] = useState('')

  const apiUrl = `https://pokeapi.co/api/v2/pokemon/`

  
  const [currentPageUrl, setCurrentPageUrl] = useState(`${apiUrl}`)
  const [nextPage, setNextPage] = useState()
  const [pokemons, setPokemons] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchPokemons = async () => {
      const res = await fetch(`${currentPageUrl}`)
      const data = await res.json()

      setNextPage(data.next)
      setIsLoading(false)

      const createPokemonObject = (result) => {
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
  }, [apiUrl, currentPageUrl, query])

  const goToNextPage = () => setCurrentPageUrl(nextPage)

  return (
    <div className="container">
      {console.log(pokemons)}
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <PokemonGrid pokemons={pokemons} isLoading={isLoading}/>
      <PagesButtons
        goToNextPage={nextPage ? goToNextPage : null}
      />
    </div>
  )
}

export default App
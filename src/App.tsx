import { useEffect, useState } from 'react'
import Loading from './components/Loading'
import './App.css'
import Header from './components/Layout/Header'
import useLoading from './hook/useLoading'
import { Pokemon, getAllPokemon, getPokemonData } from './services/pokemon'
import CardPokemon from './components/CardPokemon'
import { Flex, Input, Row } from 'antd'
import Footer from './components/Layout/Footer'

const { Search } = Input

function App() {
  const { loading, showLoading, hideLoading } = useLoading()
  const [listPokemon, setListPokemon] = useState<Pokemon[]>([])
  const [listDetailsPokemon, setListDetailsPokemon] = useState<any>([])
  const [search, setSearch] = useState<string>('')

  async function getPokemon() {
    showLoading()
    try {
      const res = await getAllPokemon()
      setListPokemon(res.results)

      res.results.map(async (pokemon) => {
        await getDetailsPokemon(pokemon.name)
      })
      hideLoading()
    } catch (error) {
      hideLoading()
    }
  }

  async function getDetailsPokemon(pokemon: string) {
    showLoading()
    try {
      const res = await getPokemonData(pokemon)
      setListDetailsPokemon((prevDetails: any) => [...prevDetails, res])
      hideLoading()
    } catch (error) {
      hideLoading()
    }
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <Flex vertical align='center'>
      <Loading />
      {!loading && (
        <>
          <Header />
          <Search
            style={styles.input}
            placeholder='Pesquise pelo pokemon...'
            enterButton
            onChange={(e) => {
              setSearch(e.target.value)

              console.log(e.target.value)
            }}
          />

          <Row
            justify='center'
            style={{
              width: '1000px',
              margin: 'auto',
              overflow: 'auto',
              height: '700px',
              scrollbarWidth: 'none'
            }}
          >
            {listDetailsPokemon
              .filter((pokemon: any) =>
                pokemon.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((object: any, key: number) => (
                <CardPokemon key={key} pokemon={object} />
              ))}
          </Row>
          <Footer />
        </>
      )}
    </Flex>
  )
}

export default App

const styles = {
  input: {
    width: '500px',
    marginTop: '80px',
    paddingBottom: '20px'
  }
}

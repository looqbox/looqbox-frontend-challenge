import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import Header from '../components/Layout/Header'
import useLoading from '../hook/useLoading'
import { Pokemon, getAllPokemon, getPokemonData } from '../services/pokemon'
import CardPokemon from '../components/CardPokemon'
import { Flex, Input, Row } from 'antd'
import Footer from '../components/Layout/Footer'

const { Search } = Input

function Home() {
  const { loading, showLoading, hideLoading } = useLoading()
  const [listDetailsPokemon, setListDetailsPokemon] = useState<any>([])
  const [selectPokemon, setSelectPokemon] = useState<any>()
  const [search, setSearch] = useState<string>('')

  async function getPokemon() {
    showLoading()
    try {
      const res = await getAllPokemon()
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
            {selectPokemon && (
              <div style={{ width: '100%', height: '300px', backgroundColor: '#000' }}>
                teste
              </div>
            )}
            {listDetailsPokemon
              .filter((pokemon: any) =>
                pokemon.name.toLowerCase().includes(search.toLowerCase())
              )
              .map((object: any, key: number) => (
                <div onClick={() => setSelectPokemon(object)}>
                  <CardPokemon key={key} pokemon={object} />
                </div>
              ))}
          </Row>
          <Footer />
        </>
      )}
    </Flex>
  )
}

export default Home

const styles = {
  input: {
    width: '500px',
    marginTop: '80px',
    paddingBottom: '20px'
  }
}

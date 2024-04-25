import { useEffect, useState } from 'react'
import useLoading from '../hook/useLoading'
import { getAllPokemon, getPokemonData } from '../services/pokemon'
import CardPokemon from '../components/CardPokemon'
import { Flex, Input, Row } from 'antd'
import DetailsPokemon from '../components/DetailsPokemon'

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

  if (loading) return <></>

  return (
    <Flex vertical align='center'>
      <Search
        style={styles.input}
        placeholder='Search for pokemon..'
        enterButton
        onChange={(e) => {
          setSelectPokemon(undefined)
          setSearch(e.target.value)
        }}
      />

      <Row
        justify='center'
        style={{
          width: '100%',
          maxWidth: '1000px',
          margin: 'auto',
          overflow: 'auto',
          maxHeight: '700px',
          scrollbarWidth: 'none'
        }}
      >
        {selectPokemon && (
          <div onClick={() => setSelectPokemon(undefined)}>
            <DetailsPokemon pokemon={selectPokemon} />
          </div>
        )}
        {listDetailsPokemon.filter((pokemon: any) =>
          pokemon.name.toLowerCase().includes(search.toLowerCase())
        ).length === 0 && (
          <Flex style={{ height: '400px' }} align='center' justify='center'>
            Nothing found :c
          </Flex>
        )}
        {!selectPokemon &&
          listDetailsPokemon
            .filter((pokemon: any) =>
              pokemon.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((object: any, key: number) => (
              <div onClick={() => setSelectPokemon(object)}>
                <CardPokemon key={key} pokemon={object} />
              </div>
            ))}
      </Row>
    </Flex>
  )
}

export default Home

const styles = {
  input: {
    maxWidth: '500px',
    width: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    marginTop: '80px',
    paddingBottom: '20px'
  }
}

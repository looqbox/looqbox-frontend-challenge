import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import { namespace } from "../../utils/_namespace"

import { api } from '../../api'
import { Card } from "../../components/Card";

import { usePokemons } from "../../context/"
import { Loading } from "../../components/Loading";

export function Home() {
  const { setPokemons, listedPokemons, setListedPokemons, isLoading, setIsLoading } = usePokemons()
  const [isActive, setIsActive] = useState(false)
  const pokemonsNumber = 50;

  useEffect(() => {

    (async ()=>{
      setIsLoading(true)
      const listInfoPokemon = []
      const listPokemon = await api.get(`pokemon?limit=${pokemonsNumber}`)
      const { data:{ results } } = listPokemon
      
      for( let item of results) {
        const infoPokemon = await api.get(`pokemon/${item.name}`)
        const { data } = infoPokemon

        const infoSpeciePokemon = await api.get(`pokemon-species/${item.name}`)
        const colorPokemon = infoSpeciePokemon.data.color.name
        const japoneseName = infoSpeciePokemon.data.names[0].name
        listInfoPokemon.push({
          data,
          colorPokemon,
          japoneseName
        })
      }
      setPokemons(listInfoPokemon)
      setListedPokemons(listInfoPokemon)
      setIsLoading(false)

    })()


  }, [setPokemons, setListedPokemons, setIsLoading])

  function renderPokemons() {
    return listedPokemons.map(item => <Card
        key={item.data.id}
        name={item.data.name} 
        image={item.data.sprites.other.dream_world.front_default} 
        id={item.data.id}
        color={item.colorPokemon}
        japoneseName={item.japoneseName}
        isActive={isActive}
        setIsActive={setIsActive}
        stats={item.data.stats}
        weight={item.data.weight}
        height={item.data.height}
        pokemonsNumber={pokemonsNumber}
      />)
  }

  return (
    <>
      {isLoading ? <Loading /> : ''}
      
      <Header />
      <div className={`${namespace}-Wrapper-Card`}>
        {renderPokemons()}
      </div>
    </>
  );
}

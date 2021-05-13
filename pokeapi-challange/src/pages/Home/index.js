import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import { namespace } from "../../utils/_namespace"

import { api } from '../../api'
import { Card } from "../../components/Card";

import { usePokemons } from "../../context/"

export function Home() {
  const { pokemons, setPokemons } = usePokemons()

  // const [pokemons, setPokemons] = useState([])
  const [isActive, setIsActive] = useState(false)
  const pokemonsNumber = 50;

  useEffect(() => {

    (async ()=>{
      const listInfoPokemon = []
      const listPokemon = await api.get(`pokemon?limit=${pokemonsNumber}`)
      const { data:{ results } } = listPokemon
      
      for( let item of results) {
        const infoPokemon = await api.get(`pokemon/${item.name}`)
        const { data } = infoPokemon

        const infoSpeciePokemon = await api.get(`pokemon-species/${item.name}`)
        const colorPokemon = infoSpeciePokemon.data.color.name
        listInfoPokemon.push({
          data,
          colorPokemon
        })
      }
      setPokemons(listInfoPokemon)

    })()


  }, [])

  function renderPokemons() {
    return pokemons.map(item => <Card
        key={item.data.id}
        name={item.data.name} 
        image={item.data.sprites.other.dream_world.front_default} 
        id={item.data.id}
        color={item.colorPokemon}
        isActive={isActive}
        setIsActive={setIsActive}
        pokemonsNumber={pokemonsNumber}
      />)
  }

  return (
    <>
      <Header />
      <div className={`${namespace}-Wrapper-Card`}>
        {renderPokemons()}
      </div>
    </>
  );
}

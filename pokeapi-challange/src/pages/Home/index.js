import { useEffect, useState } from "react";
import { Header } from "../../components/Header";

import { api } from '../../api'

export function Home() {
  const [ pokemons, setPokemons ] = useState([])
  const pokemonsNumber = 10;

  useEffect(() =>{
    (async () =>{
      const getPokemons = await api.get(`pokemon?limit=${pokemonsNumber}`)
      let { data } = getPokemons,
          { results } = data

      setPokemons(results)

    })()
  },[setPokemons])
  
  function renderPokemons(){
    let items = {}
    pokemons.map((item, index) => {
      api.get(`pokemon/${item.name}`)
      .then((pokemon) => {
        
        items[index+1] = {
          name : pokemon.data.name,
          height : pokemon.data.height,
          weight : pokemon.data.weight,
          image : pokemon.data.sprites.other.dream_world.front_default
        }
      })
    })
    console.log(items)
  }

  return (
    <>
      <Header />
      {renderPokemons()}
    </>
  );
}

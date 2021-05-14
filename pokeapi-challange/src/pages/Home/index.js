import React, { useEffect, useState, useRef } from "react";
import { Header } from "../../components/Header";

import { namespace } from "../../utils/_namespace"

import { api } from '../../api'
import { Card } from "../../components/Card";

import { usePokemons } from "../../context/"
import { Loading } from "../../components/Loading";

export function Home() {
  const { setPokemons, listedPokemons, setListedPokemons, isLoading, setIsLoading } = usePokemons()
  
  
  const [isActive, setIsActive] = useState(false)
  const [scrollRadio, setScrollRadio] = useState(null)
  const [pokemonsNumber, setPokemonsNumber] = useState(50)

  const scrollObserve = useRef();

  
  useEffect(() => {

    (async ()=>{
      setIsLoading(true)
      const listInfoPokemon = []
      //Buscando Api principal para armezar os nomes dos pokemons
      const listPokemon = await api.get(`pokemon?limit=${pokemonsNumber}`)
      const { data:{ results } } = listPokemon
      
      //Loop para buscar cada info do pokemon a partir do nomes armazenados
      for( let item of results) {
        const infoPokemon = await api.get(`pokemon/${item.name}`)
        const { data } = infoPokemon

        const infoSpeciePokemon = await api.get(`pokemon-species/${item.name}`)
        const colorPokemon = infoSpeciePokemon.data.color.name
        const japoneseName = infoSpeciePokemon.data.names[0].name
        //Alimantando o array com todas as infos dos pokemons que será utilizada na aplicação
        listInfoPokemon.push({
          data,
          colorPokemon,
          japoneseName
        })
      }
      /* setando os contextos com todas as infos dos pokemons
      * setPokemons - contexto principal onde nunca será alterado a partir de uma pesquisa, assim sendo referencia para quando uma pesquisa for vazia poder adicionar ao state setListedPokemons
      * setListedPokemons - Como falado acima, esse estado é o responsável por listar os pokemons, assim quando uma pesquisa for valida, ele quem é atualizado/manipulado
      */
      setPokemons(listInfoPokemon)
      setListedPokemons(listInfoPokemon)
      setIsLoading(false)

    })()


  }, [setPokemons, setListedPokemons, setIsLoading, pokemonsNumber])


  //Iniciando o envento de observe, e toda vez que o evento for ativado, ira atualizar o valor do ratio
  const intersectionObserver = new IntersectionObserver((entries => {
    const radio = entries[0].intersectionRatio;
    setScrollRadio(radio);
  }));


  //referenciando em qual lugar o observe vai atuar, sendo assim na ref scrollObserve
  useEffect(() => {
    intersectionObserver.observe(scrollObserve.current)

    return () => {
      intersectionObserver.disconnect();
    };
  },[intersectionObserver])

  //a cada mudança do scrollRadio, essa função é disparada, assim fazendo uma nova requisição para listar os próximos 50 pokemons
  useEffect(() => {
    if(scrollRadio > 0 && pokemonsNumber < 1118 && listedPokemons.length > 2) {
      setPokemonsNumber(pokemonsNumber + 50)
    }
  },[setPokemonsNumber, scrollRadio])


  //Component card montado e preparado para ja receber as info unitarias dos pokemons a partir de um map
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
        <div ref={scrollObserve}></div>
      </div>
    </>
  );
}

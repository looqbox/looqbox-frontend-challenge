import {useState } from 'react'
import { namespace } from '../../utils/_namespace'

import logo from './assets/logo.png'
import search from './assets/search.svg'

import { usePokemons } from '../../context'

export function Header() {
  const { pokemons, setListedPokemons} = usePokemons()

  const [isFocused, setIsFocused] = useState(false)
  const [pokemonNotFounded, setPokemonNotFounded] = useState(false)
  const [inputSearchValue, setInputSearchValue] = useState('')
  
  async function handleSubmitForm(ev) { 
    ev && ev.preventDefault()

    let inputValue = inputSearchValue.toLocaleLowerCase()

    await pokemons.filter(function (pokemon) {
      if(inputValue.length <= 0 ) {
        setListedPokemons(pokemons)
        setPokemonNotFounded('Por favor, digite o nome ou código de um pokemon válido')
        setTimeout(() => {
          setPokemonNotFounded('')
        }, 6000);
      }
      if(pokemon.data.name === inputValue || pokemon.data.id === Number(inputValue)) {
        setListedPokemons([pokemon])
      }
      return null
    });
  }

  function handleFocus() { 
    setIsFocused(true)
  }

  function handleBlur() { 
    setIsFocused(false)
  }

  function onChangeInput(event) {
    setInputSearchValue(event.target.value)
  }
  
  
  return (
    <>
    <header className={`${namespace}-Header ${isFocused ? `${namespace}-Header--isActive` : ''}`}>
      <div className={`${namespace}-Header-content`}>
        <div className={`${namespace}-Header-logo`}>
          <img src={logo} alt={`Logo LooqPoke`} />
        </div>
        <div className={`${namespace}-Header-search`}>
          <form onSubmit={(ev) => handleSubmitForm(ev)}>
            <button type="submit">
              <img src={search} alt={`icon search`} />
            </button>
            <input 
              placeholder={'Pikachu...'}
              value={inputSearchValue}
              onChange={(event) => onChangeInput(event)}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}/>
          </form>
        </div>
      </div>
    </header>
    {pokemonNotFounded.length > 1 ?
    <div className={`${namespace}-Header-alert`}>
      Pokemon não encontrado! 
      <br/>
      <br/>
      {pokemonNotFounded}
    </div> : ''}
    </>
  );
}

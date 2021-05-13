import {useState } from 'react'
import { namespace } from '../../utils/_namespace'

import logo from './assets/logo.png'
import search from './assets/search.svg'

export function Header() {

  const [isFocused, setIsFocused] = useState(false)
  const [inputSearchValue, setInputSearchValue] = useState('')
  
  async function handleSubmitForm(ev) { 
    ev && ev.preventDefault()
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
  );
}

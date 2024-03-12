import { useState } from 'react'
import { createUseStyles } from 'react-jss'

import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import { useApDispatch } from '@/store'
import { fetchPokemons, searchPokemon } from '@/store/slices/pokedex'
import { breakpoints } from '@/styles/theme'

const useStyles = createUseStyles({
  form: {
    maxWidth: '32.3rem',

    [breakpoints.xl]: {
      maxWidth: '32.3rem',
    },

    [breakpoints.sm]: {
      maxWidth: '100%',
      width: '100%',
    },
  },
  input: {
    width: '100%',
    height: '5.6rem',
    backgroundColor: '#fff',
    borderRadius: 122,
    padding: '0 8px',
    // border: 0,
  },
})

export function SearchForm() {
  const styles = useStyles()

  const [inputValue, setInputValue] = useState('')

  const dispatch = useApDispatch()

  function handleInputChange(value: string) {
    const term = value.trimStart()

    setInputValue(term)
  }

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (inputValue) {
      dispatch(searchPokemon(inputValue))
    } else {
      dispatch(fetchPokemons())
    }
  }

  return (
    <form onSubmit={handleSearch} className={styles.form}>
      <Input
        name="search"
        type="search"
        aria-label="Search"
        // autoComplete="off"
        prefix={<SearchOutlined size={16} style={{ color: '#3E75C3' }} />}
        placeholder="Search by name or code"
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
        className={styles.input}
        styles={{ prefix: { padding: 8 } }}
      />
    </form>
  )
}

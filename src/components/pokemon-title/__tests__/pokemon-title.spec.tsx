import { render, screen } from '@testing-library/react'

import { PokemonTitle } from '../pokemon-title'

describe('PokemonTitle', () => {
  it('should render pokemon title', () => {
    render(<PokemonTitle name='Bulbasaur' number={1} types={['grass']} />)

    expect(screen.getByText('Bulbasaur')).toBeInTheDocument()
  })

  it('should render pokemon number', () => {
    render(<PokemonTitle name='Bulbasaur' number={1} types={['grass']} />)
    expect(screen.getByText('#001')).toBeInTheDocument()
  })

  it('should render pokemon types', () => {
    render(<PokemonTitle name='Bulbasaur' number={1} types={['grass', 'poison']} />)

    expect(screen.getByText('grass')).toBeInTheDocument()
    expect(screen.getByText('poison')).toBeInTheDocument()
  })
})

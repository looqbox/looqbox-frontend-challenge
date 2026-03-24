import { render, screen } from '@testing-library/react'

import { PokemonFeatured } from '../pokemon-featured'

describe('PokemonFeatured', () => {
  it('should render image with correct src and alt', () => {
    render(<PokemonFeatured name='Pikachu' image='pikachu.png' type='electric' />)

    const imgElement = screen.getByRole('img')
    expect(imgElement).toHaveAttribute('src', 'pikachu.png')
    expect(imgElement).toHaveAttribute('alt', 'Pikachu')
  })

  it('should render pokemon type background gradient', () => {
    const { container } = render(
      <PokemonFeatured name='Pikachu' image='pikachu.png' type='electric' />
    )

    expect(container.firstChild).toHaveClass('pokemon-featured-electric')
  })
})

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

    expect(container.firstChild).toHaveStyle(
      'background: radial-gradient(48.52% 48.52% at 50% 50%, #F1DE8C 40%, #F6F5EE 100%)'
    )
  })
})

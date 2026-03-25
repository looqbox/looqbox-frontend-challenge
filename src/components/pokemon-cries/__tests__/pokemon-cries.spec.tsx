import { render, screen, fireEvent } from '@testing-library/react'
import { vi } from 'vitest'

import { PokemonCries } from '../pokemon-cries'

const cries = [
  { name: 'Latest', audio: 'latest.ogg' },
  { name: 'Legacy', audio: 'legacy.ogg' },
]

const playMock = vi
  .spyOn(window.HTMLMediaElement.prototype, 'play')
  .mockImplementation(async () => {
    console.log('play')
  })

describe('PokemonCries', () => {
  it('should render pokemon cries sound buttons', () => {
    render(<PokemonCries cries={cries} />)

    const latestBtn = screen.getByRole('button', { name: /latest/i })
    const legacyBtn = screen.getByRole('button', { name: /legacy/i })

    expect(latestBtn).toBeInTheDocument()
    expect(legacyBtn).toBeInTheDocument()

    fireEvent.click(latestBtn)

    expect(playMock).toHaveBeenCalled()
    playMock.mockRestore()
  })
})

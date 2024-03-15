import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { Heading } from '@/components/heading'

describe('Heading', () => {
  it('should display the right text', () => {
    const wrapper = render(
      <MemoryRouter>
        <Heading />
      </MemoryRouter>
    )

    const statusText = wrapper.getByText('National Pokedex')
    expect(statusText).toBeInTheDocument()
  })

  it('should have an working anchor', () => {
    const wrapper = render(
      <MemoryRouter>
        <Heading />
      </MemoryRouter>
    )

    const statusText = wrapper.getByTestId('link')
    expect(statusText).toBeInTheDocument()
    expect(statusText).toHaveAttribute('href', '/')
  })
})

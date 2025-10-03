import { render, screen } from '@testing-library/react'
import NotFound from '../NotFound'

describe('NotFound page', () => {
  it('renderiza a página com a mensagem de erro', () => {
    render(<NotFound />)

    const message = screen.getByText('Page Not Found')
    expect(message).toBeInTheDocument()

    const image = screen.getByAltText('Error Icon')
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('src', '../../public/error-icon.png')
  })
})

import { render } from '@testing-library/react'
import { LoadingIcon } from '../../icons/LoadingIcon'

describe('LoadingIcon', () => {
  it('renders the SVG spinner', () => {
    const { container } = render(<LoadingIcon />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg).toHaveClass('animate-spin')
  })
})

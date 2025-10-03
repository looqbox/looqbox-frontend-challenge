import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoBlock } from '../InfoBlock'

describe('InfoBlock', () => {
  it('renders label and value', () => {
    render(<InfoBlock label="Name" value="Pikachu" />)
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Pikachu')).toBeInTheDocument()
  })

  it('renders label without uppercase when upper=false', () => {
    render(<InfoBlock label="Attack" value={55} upper={false} />)
    const labelEl = screen.getByText('Attack')
    expect(labelEl).toBeInTheDocument()
    expect(labelEl).not.toHaveClass('uppercase')
  })

  it('applies uppercase class when upper is true', () => {
    render(<InfoBlock label="Speed" value={90} upper />)
    const labelEl = screen.getByText('Speed')
    expect(labelEl).toBeInTheDocument()
    expect(labelEl).toHaveClass('uppercase')
  })

  it('applies min-w-[120px] by default', () => {
    const { container } = render(<InfoBlock label="HP" value={45} />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('min-w-[120px]')
  })

  it('applies min-w-[80px] when minW=80', () => {
    const { container } = render(<InfoBlock label="ID" value={25} minW={80} />)
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).toContain('min-w-[80px]')
    expect(wrapper.className).not.toContain('min-w-[120px]')
  })

  it('does not apply min-width class for unsupported minW (fallback empty)', () => {
    const { container } = render(
      <InfoBlock label="Custom" value="X" minW={100} />,
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper.className).not.toContain('min-w-[80px]')
    expect(wrapper.className).not.toContain('min-w-[120px]')
  })

  it('supports numeric value', () => {
    render(<InfoBlock label="Defense" value={49} />)
    expect(screen.getByText('Defense')).toBeInTheDocument()
    expect(screen.getByText('49')).toBeInTheDocument()
  })
})

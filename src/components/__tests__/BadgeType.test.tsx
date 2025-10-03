import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BadgeType } from '../BadgeType'
import { typeColorsToken } from '../../tokens/typeColorsToken'

describe('BadgeType', () => {
  it('renders the type text', () => {
    render(<BadgeType type="fire" />)
    expect(screen.getByText('fire')).toBeInTheDocument()
  })

  it('applies correct color from typeColorsToken', () => {
    render(<BadgeType type="water" />)
    const badge = screen.getByText('water').parentElement as HTMLElement
    const expectedColor = typeColorsToken['water']

    expect(badge).toHaveStyle(`border-color: ${expectedColor}`)
    expect(screen.getByText('water')).toHaveStyle(`color: ${expectedColor}`)
  })

  it('applies fallback color #000000 for unknown type', () => {
    render(<BadgeType type="unknown-type" />)
    const badge = screen.getByText('unknown-type').parentElement as HTMLElement

    expect(badge).toHaveStyle('border-color: #000000')
    expect(screen.getByText('unknown-type')).toHaveStyle('color: #000000')
  })

  it('applies correct styles and classes', () => {
    const { container } = render(<BadgeType type="grass" />)
    const badge = container.firstElementChild as HTMLElement

    expect(badge).toHaveClass('border-2')
    expect(badge).toHaveClass('rounded-lg')
    expect(badge).toHaveClass('px-2')
    expect(badge).toHaveClass('py-1')
    expect(badge).toHaveClass('text-sm')
    expect(badge).toHaveClass('w-[65px]')
    expect(badge).toHaveClass('flex')
    expect(badge).toHaveClass('items-center')
    expect(badge).toHaveClass('justify-center')
  })

  it('handles different type values correctly', () => {
    const { rerender } = render(<BadgeType type="electric" />)
    expect(screen.getByText('electric')).toBeInTheDocument()

    rerender(<BadgeType type="psychic" />)
    expect(screen.getByText('psychic')).toBeInTheDocument()
  })
})

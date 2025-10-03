import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StateMessage } from '../StateMessage'

describe('StateMessage', () => {
  it('renders image with correct src and alt', () => {
    render(
      <StateMessage
        img="/test-image.png"
        alt="Test image"
        text="Loading..."
        color="text-blue-500"
      />,
    )
    const image = screen.getByAltText('Test image') as HTMLImageElement
    expect(image).toBeInTheDocument()
    expect(image.src).toContain('/test-image.png')
  })

  it('renders text message', () => {
    render(
      <StateMessage
        img="/icon.png"
        alt="Icon"
        text="No results found"
        color="text-red-500"
      />,
    )
    expect(screen.getByText('No results found')).toBeInTheDocument()
  })

  it('applies correct color class to text', () => {
    render(
      <StateMessage
        img="/icon.png"
        alt="Icon"
        text="Success!"
        color="text-green-600"
      />,
    )
    const textElement = screen.getByText('Success!')
    expect(textElement).toHaveClass('text-green-600')
    expect(textElement).toHaveClass('text-lg')
    expect(textElement).toHaveClass('font-bold')
  })

  it('applies correct classes to container', () => {
    const { container } = render(
      <StateMessage
        img="/icon.png"
        alt="Icon"
        text="Message"
        color="text-gray-500"
      />,
    )
    const wrapper = container.firstElementChild as HTMLElement
    expect(wrapper).toHaveClass('flex-1')
    expect(wrapper).toHaveClass('flex')
    expect(wrapper).toHaveClass('items-center')
    expect(wrapper).toHaveClass('justify-center')
    expect(wrapper).toHaveClass('flex-col')
    expect(wrapper).toHaveClass('gap-6')
  })

  it('applies max-h-32 class to image', () => {
    render(
      <StateMessage
        img="/icon.png"
        alt="Icon"
        text="Message"
        color="text-gray-500"
      />,
    )
    const image = screen.getByAltText('Icon')
    expect(image).toHaveClass('max-h-32')
  })

  it('handles different color values', () => {
    const { rerender } = render(
      <StateMessage
        img="/icon.png"
        alt="Icon"
        text="Message"
        color="text-yellow-400"
      />,
    )
    expect(screen.getByText('Message')).toHaveClass('text-yellow-400')

    rerender(
      <StateMessage
        img="/icon.png"
        alt="Icon"
        text="Message"
        color="text-purple-700"
      />,
    )
    expect(screen.getByText('Message')).toHaveClass('text-purple-700')
  })
})

import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import type { Stats } from '../../../api/pokemon'
import { StatsChart } from '../../graphs/StatsChart'
import React from 'react'
import { CustomTooltip } from '../../graphs/CustomTooltip'
import { CustomGraphLabel } from '../../graphs/CustomGraphLabel'

vi.mock('recharts', async (importOriginal) => {
  const original = await importOriginal<typeof import('recharts')>()
  return {
    ...original,
    ResponsiveContainer: ({ children }: React.PropsWithChildren) => (
      <div className="mock-responsive-container">{children}</div>
    ),
    RadarChart: ({ children }: React.PropsWithChildren) => (
      <div className="recharts-wrapper">
        <svg>
          <g className="recharts-radar" />
          <g className="recharts-polar-grid" />
          <g className="recharts-polar-angle-axis" />
          <g className="recharts-polar-radius-axis" />
        </svg>
        {children}
      </div>
    ),
    Tooltip: ({ content }: { content: React.ReactNode }) => (
      <div className="mock-tooltip">{content}</div>
    ),
  }
})

describe('StatsChart', () => {
  const mockStats: Stats[] = [
    { base_stat: 45, stat: { name: 'hp', url: '' } },
    { base_stat: 49, stat: { name: 'attack', url: '' } },
    { base_stat: 49, stat: { name: 'defense', url: '' } },
    { base_stat: 65, stat: { name: 'special-attack', url: '' } },
    { base_stat: 65, stat: { name: 'special-defense', url: '' } },
    { base_stat: 45, stat: { name: 'speed', url: '' } },
  ]

  it('should render chart with RadarChart and subcomponents', () => {
    const { container } = render(<StatsChart stats={mockStats} />)
    expect(container.querySelector('.recharts-wrapper')).toBeInTheDocument()
    expect(container.querySelector('.recharts-radar')).toBeInTheDocument()
    expect(container.querySelector('.recharts-polar-grid')).toBeInTheDocument()
  })

  it('should render CustomTooltip component when active', () => {
    const { container } = render(
      <CustomTooltip
        active
        payload={[{ payload: { subject: 'HP', value: 50, fullMark: 255 } }]}
      />,
    )
    expect(container.textContent).toContain('HP')
    expect(container.textContent).toContain('50 / 255')
  })

  it('should not render CustomTooltip when inactive', () => {
    const { container } = render(<CustomTooltip active={false} payload={[]} />)
    expect(container.firstChild).toBeNull()
  })
})

describe('CustomGraphLabel', () => {
  it('should render single word in uppercase', () => {
    const { container } = render(
      CustomGraphLabel({
        x: 10,
        y: 20,
        index: 0,
        payload: { value: 'speed' },
        textAnchor: 'middle',
      }) as React.ReactElement,
    )
    expect(container.querySelector('tspan')?.textContent).toBe('SPEED')
  })

  it('should split hyphenated words into multiple tspans', () => {
    const { container } = render(
      CustomGraphLabel({
        x: 10,
        y: 20,
        index: 0,
        payload: { value: 'special-attack' },
        textAnchor: 'middle',
      }) as React.ReactElement,
    )
    const tspans = container.querySelectorAll('tspan')
    expect(tspans.length).toBe(2)
    expect(tspans[0].textContent).toBe('SPECIAL')
    expect(tspans[1].textContent).toBe('ATTACK')
  })

  it('should handle undefined payload value', () => {
    const { container } = render(
      CustomGraphLabel({
        x: 10,
        y: 20,
        index: 0,
        payload: { value: undefined },
        textAnchor: 'middle',
      }) as React.ReactElement,
    )
    expect(container.querySelector('text')).toBeInTheDocument()
  })
})

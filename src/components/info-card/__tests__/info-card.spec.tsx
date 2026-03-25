import { render, screen } from '@testing-library/react'

import { InfoCard } from '../info-card'

describe('InfoCard', () => {
  it('should render info card content', () => {
    render(<InfoCard title='Height' description='0.7 m' />)

    expect(screen.getByText('Height')).toBeInTheDocument()
    expect(screen.getByText('0.7 m')).toBeInTheDocument()
  })
})

import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Layout from '../Layout'

vi.mock('../../components/PokemonSearch', () => ({
  PokemonSearch: ({ redirectToHome }: { redirectToHome?: boolean }) => (
    <div data-testid="pokemon-search">
      PokemonSearch (redirect={String(redirectToHome)})
    </div>
  ),
}))

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom',
  )
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet">Outlet content</div>,
  }
})

function renderWithRouter(ui: React.ReactElement, route: string = '/') {
  return render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>)
}

describe('Layout', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders logo with link to home', () => {
    renderWithRouter(<Layout />, '/')
    const logoLink = screen.getByRole('link')
    expect(logoLink).toHaveAttribute('href', '/')
    expect(screen.getByRole('img')).toHaveAttribute('src', '/logo-looqdex.png')
  })

  it('does not render PokemonSearch on home route', () => {
    renderWithRouter(<Layout />, '/')
    expect(screen.queryByTestId('pokemon-search')).not.toBeInTheDocument()
  })

  it('renders PokemonSearch when not on home route', () => {
    renderWithRouter(<Layout />, '/pokemon/25')
    expect(screen.getByTestId('pokemon-search')).toBeInTheDocument()
    expect(screen.getByText(/redirect=true/)).toBeInTheDocument()
  })

  it('renders Outlet content', () => {
    renderWithRouter(<Layout />, '/')
    expect(screen.getByTestId('outlet')).toHaveTextContent('Outlet content')
  })

  it('renders footer with current year', () => {
    renderWithRouter(<Layout />, '/')
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(`© ${year} - Rodrigo Andrade`)).toBeInTheDocument()
  })

  it('handles both branches of isHome (true and false)', () => {
    renderWithRouter(<Layout />, '/')
    expect(screen.queryByTestId('pokemon-search')).not.toBeInTheDocument()

    renderWithRouter(<Layout />, '/about')
    expect(screen.getByTestId('pokemon-search')).toBeInTheDocument()
  })

  it('renders all layout components correctly', () => {
    renderWithRouter(<Layout />, '/')

    expect(screen.getByRole('link')).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByTestId('outlet')).toBeInTheDocument()
    expect(screen.getByText(/Rodrigo Andrade/)).toBeInTheDocument()
  })
})

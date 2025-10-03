import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { PokemonSearch } from '../PokemonSearch'
import { Provider } from 'react-redux'
import { configureStore, type Store } from '@reduxjs/toolkit'
import pokemonReducer from '../../store/pokemonSlice'
import { BrowserRouter, useNavigate, useLocation } from 'react-router-dom'
import type { Location } from 'react-router-dom'

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom',
  )
  return {
    ...actual,
    useNavigate: vi.fn(),
    useLocation: vi.fn(),
  }
})

const mockNavigate = vi.fn()
const mockUseNavigate = vi.mocked(useNavigate)
const mockUseLocation = vi.mocked(useLocation)

const createMockStore = (initialSearchTerm = '', currentPage = 1) =>
  configureStore({
    reducer: { pokemon: pokemonReducer },
    preloadedState: {
      pokemon: { currentPage, itemsPerPage: 20, searchTerm: initialSearchTerm },
    },
  })

const renderSearch = (
  props: Partial<React.ComponentProps<typeof PokemonSearch>> = {},
  store: Store = createMockStore(),
) => {
  const utils = render(
    <Provider store={store}>
      <BrowserRouter>
        <PokemonSearch {...props} />
      </BrowserRouter>
    </Provider>,
  )
  return {
    ...utils,
    store,
    input: screen.getByPlaceholderText('Search Pokemon...') as HTMLInputElement,
    getSearchButton: () =>
      utils.container.querySelector<HTMLButtonElement>(
        '.ant-input-search-button',
      )!,
  }
}

describe('PokemonSearch', () => {
  let user: ReturnType<typeof userEvent.setup>

  beforeEach(() => {
    vi.clearAllMocks()
    user = userEvent.setup()
    mockUseNavigate.mockReturnValue(mockNavigate)
    mockUseLocation.mockReturnValue({ pathname: '/' } as Location)
  })

  it('renders input and shows initial store value', () => {
    const { input } = renderSearch({}, createMockStore('pikachu'))
    expect(input).toHaveValue('pikachu')
  })

  it('formats hyphens to spaces', () => {
    const { input } = renderSearch({}, createMockStore('mr-mime'))
    expect(input).toHaveValue('mr mime')
  })

  it('updates value on typing', async () => {
    const { input } = renderSearch()
    await user.type(input, 'charizard')
    expect(input).toHaveValue('charizard')
  })

  it('dispatches formatted search term', async () => {
    const { input, store, getSearchButton } = renderSearch()
    await user.type(input, 'mr mime')
    await user.click(getSearchButton())
    expect(store.getState().pokemon.searchTerm).toBe('mr-mime')
  })

  it('trims whitespace when dispatching', async () => {
    const { input, store, getSearchButton } = renderSearch()
    await user.type(input, '  pikachu  ')
    await user.click(getSearchButton())
    expect(store.getState().pokemon.searchTerm).toBe('pikachu')
  })

  it('navigates home when redirectToHome=true and not on home', async () => {
    mockUseLocation.mockReturnValue({ pathname: '/pokemon/25' } as Location)
    const { input, getSearchButton } = renderSearch({ redirectToHome: true })
    await user.type(input, 'bulbasaur')
    await user.click(getSearchButton())
    expect(mockNavigate).toHaveBeenCalledWith('/')
  })

  it('does not navigate when already on home', async () => {
    const { input, getSearchButton } = renderSearch({ redirectToHome: true })
    await user.type(input, 'squirtle')
    await user.click(getSearchButton())
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('does not navigate when redirectToHome=false', async () => {
    mockUseLocation.mockReturnValue({ pathname: '/pokemon/25' } as Location)
    const { input, getSearchButton } = renderSearch({ redirectToHome: false })
    await user.type(input, 'charmander')
    await user.click(getSearchButton())
    expect(mockNavigate).not.toHaveBeenCalled()
  })

  it('syncs input when Redux searchTerm changes', () => {
    const store = createMockStore('pikachu')
    const { input, rerender } = renderSearch({}, store)
    expect(input.value).toBe('pikachu')

    store.dispatch({ type: 'pokemon/setSearchTerm', payload: 'charizard' })
    rerender(
      <Provider store={store}>
        <BrowserRouter>
          <PokemonSearch />
        </BrowserRouter>
      </Provider>,
    )
    expect(input.value).toBe('charizard')
  })

  it('resets page to 1 on search', async () => {
    const store = createMockStore('', 5)
    const { input, getSearchButton } = renderSearch({}, store)
    await user.type(input, 'eevee')
    await user.click(getSearchButton())
    expect(store.getState().pokemon.currentPage).toBe(1)
  })

  it('applies max-w-md CSS class', () => {
    const { container } = renderSearch()
    expect(container.querySelector('.max-w-md')).toBeInTheDocument()
  })
})

import { render } from '@testing-library/react'

import { mockKantoPokedex } from '../testsMock/mock'
import PokemonList from '@/app/components/PokemonList/PokemonList'

it('renders homepage unchanged', () => {
    const { container } = render(
        <PokemonList kantoPokedex={mockKantoPokedex} />
    )
    expect(container).toMatchSnapshot()
})

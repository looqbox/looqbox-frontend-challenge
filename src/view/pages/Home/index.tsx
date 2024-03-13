import { PokemonInformationContextProvider } from './contexts/PokemonInformation'

import { PokemonGrid } from './components/PokemonGrid'
import { PokemonSearch } from './components/PokemonSearch'

export default function Home () {
  return (
    <PokemonInformationContextProvider>
      <main style={{ maxWidth: '1200px', margin: '24px auto 0' }}>
        <PokemonSearch />

        <PokemonGrid />
      </main>
    </PokemonInformationContextProvider>
  )
}

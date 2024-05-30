import PokemonList from '@/components/PokemonList/PokemonList'
import PokemonTypes from '@/types/PokemonTypes'

const Home = async () => {
    const kantoPokedexResponse = await fetch(
        `https://pokeapi.co/api/v2/pokedex/kanto`
    )

    const kantoPokedexJson =
        (await kantoPokedexResponse.json()) as PokemonTypes.Pokedex

    return (
        <main className='flex min-h-screen flex-col items-center max-w-screen-lg py-24 px-4 mx-auto'>
            <PokemonList kantoPokedex={kantoPokedexJson} />
        </main>
    )
}

export default Home

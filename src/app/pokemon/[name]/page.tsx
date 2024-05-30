import PokemonTypes from '@/types/PokemonTypes'
import stringUtil from '@/utils/stringUtil/stringUtil'
import Image from 'next/image'

interface Props {
    params: {
        name: string
    }
}

const PokemonDetailsPage = async (props: Props) => {
    const { params } = props

    const pokemonDataResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${params.name}`
    )

    const pokemonData =
        (await pokemonDataResponse.json()) as PokemonTypes.Pokemon

    pokemonData.types[0].type

    return (
        <main className='flex min-h-screen flex-col items-center max-w-screen-lg py-24 px-4 mx-auto'>
            <p
                style={{
                    fontSize: 20,
                    fontWeight: 700,
                }}
            >
                {stringUtil.firstLetterUpper(params.name)}
            </p>
            <div className='max-h-52 flex-1 relative w-full'>
                <Image
                    alt='Imagem do pokémon'
                    className='object-contain'
                    src={pokemonData.sprites.front_default}
                    fill
                />
            </div>

            <p>Tipos: {}</p>
        </main>
    )
}

export default PokemonDetailsPage

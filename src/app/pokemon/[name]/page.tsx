import PokemonChart from '@/app/pokemon/[name]/components/PokemonChart/PokemonChart'
import PokemonTypes from '@/types/PokemonTypes'
import stringUtil from '@/utils/stringUtil/stringUtil'
import { Card } from 'antd'
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

    const arrayTypesString = pokemonData.types.map((pokemonType) =>
        stringUtil.firstLetterUpper(pokemonType.type.name)
    )

    return (
        <main className='flex min-h-screen flex-col  max-w-screen-lg py-24 px-4 mx-auto'>
            <Card
                classNames={{
                    body: 'w-full  flex flex-col items-center',
                }}
            >
                <p
                    style={{
                        fontSize: 20,
                        fontWeight: 700,
                    }}
                >
                    {stringUtil.firstLetterUpper(params.name)}
                </p>
                <div className='grid grid-cols-12 gap-4 mt-4'>
                    <div className='col-span-12 md:col-span-4 min-h-52 relative'>
                        <Image
                            alt='Imagem do pokémon'
                            className='object-contain'
                            src={pokemonData.sprites.front_default}
                            fill
                        />
                    </div>

                    <div className='col-span-12 md:col-span-8 flex flex-col '>
                        <p>
                            <b>Tipos:</b> {arrayTypesString.join(', ')}.
                        </p>

                        <div
                            className='flex-1'
                            style={{ width: 400, maxWidth: '100%' }}
                        >
                            <PokemonChart pokemonData={pokemonData} />
                        </div>
                    </div>
                </div>
            </Card>
        </main>
    )
}

export default PokemonDetailsPage

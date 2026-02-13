import { Button } from 'antd'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Attribute } from '../../components/Attribute'
import { PokemonType } from '../../components/PokemonType'
import { StatusDetail } from '../../components/StatusDetail'
import { usePokemon } from '../../hooks/usePokemon'
import type { Pokemon } from '../../types/pokemon'

export function PokemonDetails() {
  const { id } = useParams()

  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null)
  const [pokemonDescription, setPokemonDescription] = useState('')
  const [currentImage, setCurrentImage] = useState('')
  const [weaknesses, setWeaknesses] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  const { getPokemonDescription, getPokemonDetails, getPokemonWeaknesses } =
    usePokemon()

  useEffect(() => {
    if (!id) return

    const fetchData = async () => {
      setLoading(true)

      const details = await getPokemonDetails(id)
      const description = await getPokemonDescription(id)

      if (!details) {
        setLoading(false)
        return
      }

      setPokemonDetails(details)
      setPokemonDescription(description || '')
      setCurrentImage(
        details.sprites?.other['official-artwork']?.front_default || '',
      )

      if (details.types?.length) {
        const weaknessesData = await getPokemonWeaknesses(details.types)
        setWeaknesses(weaknessesData)
      }

      setLoading(false)
    }

    fetchData()
  }, [id])

  if (loading) {
    return (
      <main className='w-full h-dvh flex items-center justify-center'>
        <p className='text-xl font-bold'>Loading...</p>
      </main>
    )
  }

  if (!pokemonDetails) {
    return null
  }

  return (
    <main className='w-full flex flex-col items-center justify-center px-[5%] pt-20'>
      <section className='w-full flex flex-col md:flex-row md:justify-between md:gap-0 bg-blue-200 p-2 rounded-2xl rounded-tr-none rounded-bl-none animate-popup shadow'>
        <div className='w-full md:w-[49.5%] flex flex-col justify-between items-center pb-4'>
          <div className='w-full'>
            <div className='w-full flex items-center justify-between bg-white py-1 px-3 rounded-2xl rounded-tr-none rounded-bl-none shadow'>
              <h3 className='font-black text-2xl italic'>
                {pokemonDetails.name}
              </h3>
              <p className='text-gray-500 italic'>#{pokemonDetails.id}</p>
            </div>

            <ul className='flex gap-1 mt-2 flex-wrap'>
              {pokemonDetails.types?.map((type) => (
                <li key={type.type.name} className='mb-2'>
                  <PokemonType
                    redirectUrl={type.type.url}
                    name={type.type.name}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className='w-full flex items-center justify-center relative h-48 md:h-96 '>
            <div className='absolute w-60 h-60 md:w-96 md:h-96 bg-blue-500/30 blur-3xl rounded-full'></div>

            <img
              src={currentImage}
              alt={pokemonDetails.name}
              className='relative w-full h-48 md:h-96 object-contain'
            />
          </div>

          <span className='text-blue-500 text-xs md:text-sm text-center italic'>
            Click in the pokemon type to get a complete information!
          </span>
        </div>

        <aside className='w-full md:w-[49.5%] flex flex-col gap-4 bg-white py-2 px-4 rounded-2xl rounded-tr-none rounded-bl-none'>
          <h3 className='text-center font-medium text-2xl text-blue-500 italic border-b-2 border-blue-200'>
            General Information
          </h3>

          <div className='flex flex-col gap-1'>
            <h4 className='font-medium text-gray-500 text-sm'>Story</h4>
            <p className='line-clamp-4 italic'>{pokemonDescription}</p>
          </div>

          <div className='flex flex-col gap-1'>
            <h4 className='font-medium text-gray-500 text-sm'>Weaknesses</h4>
            <ul className='flex flex-wrap gap-1'>
              {weaknesses.map((weakness) => (
                <li key={weakness} className='mb-2'>
                  <PokemonType
                    redirectUrl={`https://pokeapi.co/api/v2/type/${weakness}/`}
                    name={weakness}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col gap-1'>
            <h4 className='font-medium text-gray-500 text-sm'>Versions</h4>
            <ul className='flex flex-wrap gap-1'>
              <li>
                <Button
                  onClick={() =>
                    setCurrentImage(
                      pokemonDetails.sprites?.other['official-artwork']
                        ?.front_default || '',
                    )
                  }
                  type='primary'
                  className='rounded-xl! rounded-tr-none! rounded-bl-none! '
                >
                  Normal
                </Button>
              </li>
              <li>
                <Button
                  onClick={() =>
                    setCurrentImage(
                      pokemonDetails.sprites?.other['official-artwork']
                        ?.front_shiny || '',
                    )
                  }
                  type='primary'
                  className='rounded-xl! rounded-tr-none! rounded-bl-none!'
                >
                  Shiny
                </Button>
              </li>
            </ul>
          </div>

          <div className='w-full flex flex-wrap justify-between'>
            <Attribute title='Weight' value={`${pokemonDetails.weight} kg`} />

            <Attribute title='Height' value={`${pokemonDetails.height} m`} />

            <Attribute
              title='Exp'
              value={`${pokemonDetails.base_experience}`}
            />
          </div>

          <div className='flex flex-col gap-1'>
            <h4 className='font-medium text-gray-500 text-sm'>Stats</h4>
            {pokemonDetails.stats?.map((stat) => (
              <StatusDetail
                key={stat.stat.name}
                name={stat.stat.name}
                base_stat={stat.base_stat}
              />
            ))}
          </div>
        </aside>
      </section>
    </main>
  )
}

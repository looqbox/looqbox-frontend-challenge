import { Button, Card } from 'antd'
import { useEffect, useState, type ComponentProps } from 'react'
import { useNavigate } from 'react-router'
import FallbackImage from '../../assets/fallback.png'

import { api } from '../../services/api'

export interface Sprites {
  front_default: string
}

export interface Form {
  name: string
  url: string
}

export interface PokemonData {
  name: string
  order: number
  id: number
  sprites: Sprites
  forms: Form[]
}

interface PokemonCardProps extends ComponentProps<'li'> {
  name: string
  url: string
}

export function PokemonCard({ name, url, ...rest }: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState<PokemonData>()
  const navigate = useNavigate()

  const getPokemon = async (url: string) => {
    const response = await api.get<PokemonData>(url)
    setPokemonData(response.data)
  }

  useEffect(() => {
    getPokemon(url)
  }, [])

  return (
    <li
      className='w-full md:w-[49.5%] lg:w-[23.5%] cursor-pointer! animate-popup'
      key={name}
      {...rest}
    >
      <Card
        onClick={() => navigate(`/pokemons/${pokemonData?.id}/details`)}
        className='w-full! border-4! border-blue-200! mb-4! rounded-tr-none! rounded-bl-none! rounded-2xl! transition-all duration-300! hover:border-blue-400! hover:ring-4 hover:ring-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.9),0_0_40px_rgba(59,130,246,0.8),0_0_60px_rgba(96,165,250,0.7)]'
      >
        <div className='w-full h-fit flex flex-col'>
          <h3 className='w-full font-cursive text-2xl truncate h-fit'>
            {pokemonData?.name}
          </h3>
          <p className='font-medium text-base text-neutral-400 italic'>
            #{pokemonData?.id}
          </p>
        </div>
        <div className='relative w-full h-48 flex items-center justify-center'>
          <div className='absolute w-40 h-40 bg-blue-500/40 blur-3xl rounded-full'></div>

          <img
            src={pokemonData?.sprites.front_default ?? FallbackImage}
            alt={name}
            className='relative w-full! h-48 object-contain'
          />
        </div>
        <Button
          type='primary'
          onClick={() => navigate(`/pokemons/${pokemonData?.id}/details`)}
          className='w-full mt-4 rounded-tr-none! rounded-bl-none!'
        >
          Details
        </Button>
      </Card>
    </li>
  )
}

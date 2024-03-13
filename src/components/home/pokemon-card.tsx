import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Badge } from '../ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

type PokemonListTypes = {
  data: {
    forEach(arg0: (pokemonUnit: any) => void): unknown
    name: string
    id: number
    order: number
    types: {
      map(
        arg0: (typeItem: {
          type: { name: string }
        }) => import('react/jsx-runtime').JSX.Element
      ): ReactNode
      name: string
      url: string
    }
    sprites: {
      other: {
        home: {
          front_default: string
        }
      }
    }
  }
}

export const PokemonCard = ({ data }: PokemonListTypes) => {
  return (
    <Link to={`/pokemon/${data.id}`}>
      <Card className="flex min-h-[492px] flex-col justify-end border-white transition-[background] hover:bg-white/10">
        <img
          height={336}
          width={336}
          src={data.sprites?.other?.home?.front_default}
          alt=""
        />

        <CardHeader className="mt-4 scroll-m-20 border-b border-t py-4 text-2xl font-semibold capitalize">
          <CardTitle className="capitalize tracking-tight">
            {data.name}
          </CardTitle>

          <CardDescription className="tracking-tighter">
            #{data.order?.toString().padStart(4, '0')}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex gap-2 py-4">
          {data.types?.map((typeItem: { type: { name: string } }) => {
            return (
              <Badge
                key={crypto.randomUUID()}
                className="capitalize text-white"
              >
                {typeItem.type.name}
              </Badge>
            )
          })}
        </CardFooter>
      </Card>
    </Link>
  )
}

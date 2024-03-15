import { Link } from 'react-router-dom'

import { Badge } from '../ui/badge'
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'

type PokemonListProps = {
  data: {
    name: string
    id: number
    order: number

    types: {
      type: {
        name: string
        url: string
      }
    }[]

    sprites: {
      other: {
        home: {
          front_default: string
        }
      }
    }
  }
}

export function PokemonCard({ data }: PokemonListProps) {
  const { id, sprites, name, order, types } = data

  return (
    <Link data-testid="pokemon-link" to={`/pokemon/${id}`}>
      <Card className="flex min-h-[492px] flex-col items-center justify-end border-white transition-[background] hover:bg-white/10">
        <img
          height={336}
          width={336}
          src={sprites?.other?.home?.front_default}
          alt=""
        />

        <CardHeader className="mt-4 w-full scroll-m-20 border-b border-t py-4 text-2xl font-semibold capitalize">
          <CardTitle className="capitalize tracking-tight">{name}</CardTitle>

          <CardDescription className="tracking-tighter">
            #{order?.toString().padStart(4, '0')}
          </CardDescription>
        </CardHeader>

        <CardFooter className="flex w-full gap-2 py-4">
          {types?.map((typeItem) => {
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

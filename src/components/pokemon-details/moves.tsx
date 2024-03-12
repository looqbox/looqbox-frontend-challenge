import { Badge } from '../ui/badge'

type MovesProps = {
  moves?: {
    move: {
      name: string
      url: string
    }
  }[]
}

export const PokemonDetailsMoves = (data: MovesProps) => {
  return (
    data.moves && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Moves</strong>

        <div className="flex flex-wrap gap-2">
          {data.moves.map((item) => {
            return (
              <Badge
                variant={'outline'}
                key={crypto.randomUUID()}
                className="capitalize tracking-tight text-white"
              >
                {item.move.name}
              </Badge>
            )
          })}
        </div>
      </div>
    )
  )
}

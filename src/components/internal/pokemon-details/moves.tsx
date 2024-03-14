import { Badge } from '../../ui/badge'

type MoveProps = {
  move: {
    name: string
    url: string
  }
}

type MovesProps = {
  moves?: MoveProps[]
}

export const PokemonDetailsMoves = ({ moves }: MovesProps) => {
  function replaceDashWithWhiteSpace(value: string) {
    if (value !== undefined) {
      return value.replace(/-/g, ' ')
    }
  }

  return (
    moves && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Moves</strong>

        <div className="flex flex-wrap gap-2">
          {moves.map((item) => {
            return (
              <Badge
                variant={'outline'}
                key={crypto.randomUUID()}
                className="capitalize tracking-tight text-white"
              >
                {replaceDashWithWhiteSpace(item.move.name)}
              </Badge>
            )
          })}
        </div>
      </div>
    )
  )
}

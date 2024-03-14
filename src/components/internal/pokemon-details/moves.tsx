import { replaceDashWithWhiteSpace } from '@/modules/replaceDashWithWhiteSpace'

import { Badge } from '../../ui/badge'

type Props = {
  value: {
    move: {
      name: string
      url: string
    }
  }[]
}

export const PokemonDetailsMoves = ({ value }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <strong className="border-b pb-2 tracking-tight">Moves</strong>

      <div className="flex flex-wrap gap-2">
        {value?.map((item) => {
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
}

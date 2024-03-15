import { Badge } from '../../ui/badge'

type TypesProps = {
  value: {
    type: {
      name: string
      url: string
    }
  }[]
}

export const PokemonDetailsTypes = ({ value }: TypesProps) => {
  return (
    <div className="flex flex-col gap-2">
      <strong className="border-b pb-2 tracking-tight">Type(s)</strong>

      <div className="flex gap-2">
        {value.map((item) => {
          return (
            <Badge
              key={crypto.randomUUID()}
              className="capitalize tracking-tight text-white"
            >
              {item.type.name}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}

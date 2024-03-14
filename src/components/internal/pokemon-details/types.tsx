import { Badge } from '../../ui/badge'

type TypeProps = {
  type: {
    name: string
    url: string
  }
}

type TypesProps = {
  types: TypeProps[]
}

export const PokemonDetailsTypes = ({ types }: TypesProps) => {
  return (
    types && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Type(s)</strong>

        <div className="flex gap-2">
          {types.map((item) => {
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
  )
}

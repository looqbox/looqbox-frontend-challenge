import { Badge } from '../../ui/badge'

type AbilitiesProps = {
  value: {
    ability: {
      name: string
    }
  }[]
}

export const PokemonDetailsAbilities = ({ value }: AbilitiesProps) => {
  return (
    <div className="flex flex-col gap-2">
      <strong className="border-b pb-2 tracking-tight">Ability:</strong>

      <div className="flex gap-2">
        {value.map((item) => {
          return (
            <Badge
              variant={'secondary'}
              key={crypto.randomUUID()}
              className="capitalize tracking-tight text-white"
            >
              {item.ability.name}
            </Badge>
          )
        })}
      </div>
    </div>
  )
}

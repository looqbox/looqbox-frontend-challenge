import { Badge } from '../../ui/badge'

type AbilityProps = {
  ability: {
    name: string
  }
}

type AbilitiesProps = {
  abilities: AbilityProps[]
}

export const PokemonDetailsAbilities = (data: AbilitiesProps) => {
  return (
    data.abilities && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Ability:</strong>

        <div className="flex gap-2">
          {data.abilities.map((item) => {
            return (
              <Badge
                variant={'secondary'}
                key={crypto.randomUUID()}
                className="capitalize tracking-tight text-white"
              >
                {item.ability?.name}
              </Badge>
            )
          })}
        </div>
      </div>
    )
  )
}

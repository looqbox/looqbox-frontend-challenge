import { Badge } from '../../ui/badge'

type AbilitiesProps = {
  abilities: {
    ability: { name: string }
    map(
      arg0: (item: {
        ability: { name: string }
      }) => import('react/jsx-runtime').JSX.Element
    ): import('react').ReactNode
  }
}

export const PokemonDetailsAbilities = (data: AbilitiesProps) => {
  return (
    data.abilities && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Ability:</strong>

        <div className="flex gap-2">
          {data.abilities.map((item: { ability: { name: string } }) => {
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

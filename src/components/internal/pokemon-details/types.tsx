import { ReactNode } from 'react'

import { Badge } from '../../ui/badge'

type TypesProps = {
  types?: {
    type?: {
      name: string
      url: string
    }

    map(
      arg0: (item: {
        type: {
          name: string
        }
      }) => import('react/jsx-runtime').JSX.Element
    ): ReactNode
  }
}

export const PokemonDetailsTypes = (data: TypesProps) => {
  return (
    data?.types && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Type(s)</strong>

        <div className="flex gap-2">
          {data?.types?.map((item: { type: { name: string } }) => {
            return (
              <Badge
                key={crypto.randomUUID()}
                className="capitalize tracking-tight text-white"
              >
                {item.type?.name}
              </Badge>
            )
          })}
        </div>
      </div>
    )
  )
}

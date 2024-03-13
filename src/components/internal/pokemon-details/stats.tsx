import { ReactNode } from 'react'

type StatProps = {
  name: string
  url: string
}

type StatsProps = {
  stats: {
    base_stat: number
    effort: 0
    stat: StatProps

    map(
      arg0: (item: {
        stat: { name: string }
        base_stat: string
      }) => import('react/jsx-runtime').JSX.Element
    ): ReactNode
  }
}

export const PokemonDetailsStats = (data: StatsProps) => {
  return (
    data.stats && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Stats</strong>

        {data.stats.map(
          (item: { stat: { name: string }; base_stat: string }) => {
            return (
              <p
                key={crypto.randomUUID()}
                className="flex flex-1 justify-between"
              >
                <strong className="capitalize tracking-tight">
                  {item.stat?.name}:
                </strong>

                <span className=" tracking-tigh">{item?.base_stat}</span>
              </p>
            )
          }
        )}
      </div>
    )
  )
}

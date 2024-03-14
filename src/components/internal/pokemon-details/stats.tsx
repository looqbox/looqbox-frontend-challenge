type StatProps = {
  name: string
  url: string
}

type StatsProps = {
  stats: {
    base_stat: number
    effort: 0
    stat: StatProps
  }[]
}

export const PokemonDetailsStats = ({ stats }: StatsProps) => {
  return (
    stats && (
      <div className="flex flex-col gap-2">
        <strong className="border-b pb-2 tracking-tight">Stats</strong>

        {stats.map((item) => {
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
        })}
      </div>
    )
  )
}

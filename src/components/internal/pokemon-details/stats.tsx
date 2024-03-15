import { replaceDashWithWhiteSpace } from '@/modules/replaceDashWithWhiteSpace'

type ChartTypes = {
  value: {
    base_stat: number
    effort: number

    stat: {
      name: string
      url: string
    }
  }[]
}

export const PokemonDetailsStats = ({ value }: ChartTypes) => {
  return (
    <div className="flex flex-col gap-2">
      <strong className="border-b pb-2 tracking-tight">Stats</strong>

      {value.map((item) => {
        return (
          <p key={crypto.randomUUID()} className="flex flex-1 justify-between">
            <strong className="capitalize tracking-tight">
              {replaceDashWithWhiteSpace(item.stat.name)}:
            </strong>

            <span className="tracking-tight">{item.base_stat}</span>
          </p>
        )
      })}
    </div>
  )
}

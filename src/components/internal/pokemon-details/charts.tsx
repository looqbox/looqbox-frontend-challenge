import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'

type ChartTypes = {
  stats: {
    base_stat: number
    effort: number

    stat: {
      name: string
      url: string
    }
  }[]
}

export function PokemonDetailsCharts({ stats }: ChartTypes) {
  const generalPokemonStats = [
    {
      hp: 1,
      // lowestAttack: 5,
      // lowestDefense: 5,
      // lowestSpAttack: 10,
      // lowestSpDefense: 20,
      // lowestSpeed: 5,
    },
    {
      hp: stats[0].base_stat,
    },
    {
      hp: 255,
      // highestAttack: 190,
      // highestDefense: 230,
      // highestSpAttack: 194,
      // highestSpDefense: 230,
      // highestSpeed: 200,
    },
  ]

  return (
    <>
      <div className="border-b pb-3">
        <strong className="text-lg font-semibold tracking-tight">
          HP Stat Comparison
        </strong>

        <small className="block text-sm leading-none tracking-tight">
          (against Min & Max base stat of all pokémons)
        </small>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={generalPokemonStats} style={{ fontSize: 12 }}>
          <XAxis
            dataKey={stats[0].stat.name}
            stroke="#888"
            axisLine={false}
            tickLine={false}
          />

          <Line type="linear" strokeWidth={2} dataKey="hp" stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
    </>
  )
}

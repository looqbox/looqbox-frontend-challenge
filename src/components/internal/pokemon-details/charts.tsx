import { Line, LineChart, ResponsiveContainer, XAxis } from 'recharts'

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

export function PokemonDetailsCharts({ value }: ChartTypes) {
  const generalPokemonStats = [
    {
      hp: 1,
    },
    {
      hp: value[0].base_stat,
    },
    {
      hp: 255,
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
            dataKey={value[0].stat.name}
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

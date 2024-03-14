import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export function PokemonDetailsCharts({ stats }) {
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
    <div>
      <strong className="block pb-4">
        HP Stat Comparison (Min, Current & Max)
      </strong>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={generalPokemonStats} style={{ fontSize: 12 }}>
          <YAxis stroke="#888" axisLine={false} tickLine={false} />

          <XAxis
            dataKey={stats[0].stat.name}
            stroke="#888"
            axisLine={false}
            tickLine={false}
          />

          <Line type="linear" strokeWidth={2} dataKey="hp" stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

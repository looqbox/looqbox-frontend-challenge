import { theme, Typography } from 'antd'
import { Cell, Label, Legend, Pie, PieChart } from 'recharts'

interface Props {
  data: { name: string; value: number }
  color?: string
  size?: number
}

const DonutChart = ({ data, color, size }: Props) => {
  const {
    token: { colorPrimary, colorText }
  } = theme.useToken()

  const formatedData = [
    { ...data, color: color ?? colorPrimary },
    { name: 'rest', value: 260 - data.value, color: '#C8D3D3' }
  ]
  /* The above value (260) is based on the max base stat that a Pokémon can have.
    The stat is the HP of Blissey and Eternamax Eternatus, that are both 255.
  */

  return (
    <PieChart width={size ?? 150} height={size ?? 150}>
      <Pie
        cx="50%"
        cy="50%"
        data={formatedData}
        dataKey="value"
        nameKey="name"
        innerRadius={38}
        outerRadius={45}
        startAngle={270}
        endAngle={-90}
        fill={color ?? colorPrimary}
      >
        {formatedData.map(entry => (
          <Cell key={`cell-${entry.name}`} fill={entry.color} />
        ))}
        <Label
          name={data.name}
          position="center"
          value={data.value}
          style={{ fontSize: 24, fill: colorText }}
        />
      </Pie>
      <Legend
        content={({ payload }) => (
          <Typography.Text
            type="secondary"
            style={{ display: 'block', width: '100%', textAlign: 'center' }}
          >
            {payload && payload[0]?.value}
          </Typography.Text>
        )}
      />
    </PieChart>
  )
}

export default DonutChart

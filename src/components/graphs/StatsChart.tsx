import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import type { Stats } from '../../api/pokemon'
import { CustomGraphLabel } from './CustomGraphLabel'
import { CustomTooltip } from './CustomTooltip'

export const StatsChart = ({ stats }: { stats: Stats[] }) => {
  const chartData = stats.map((stat) => ({
    subject: stat.stat.name.toUpperCase(),
    value: stat.base_stat,
    fullMark: 255,
  }))

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="65%" data={chartData}>
        <PolarGrid stroke="#ccc" />
        <PolarAngleAxis dataKey="subject" tick={CustomGraphLabel} />
        <PolarRadiusAxis angle={90} domain={[0, 255]} tick={false} />
        <Radar
          dataKey="value"
          stroke="#40da62"
          fill="#53d893"
          fillOpacity={0.6}
        />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  )
}

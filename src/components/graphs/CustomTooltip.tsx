interface TooltipPayload {
  subject: string
  value: number
  fullMark: number
}

export interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ payload: TooltipPayload }>
}

export const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const stat = payload[0].payload
    return (
      <div className="bg-white rounded-md px-4 py-2 text-xs shadow">
        <p className="font-semibold opacity-60">{stat.subject}</p>
        <p className="font-bold text-lg">
          {stat.value} / {stat.fullMark}
        </p>
      </div>
    )
  }
  return null
}

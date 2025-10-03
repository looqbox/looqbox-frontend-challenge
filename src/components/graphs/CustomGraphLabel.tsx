import type { TickItemTextProps } from 'recharts/types/polar/PolarAngleAxis'

export const CustomGraphLabel = (props: TickItemTextProps) => {
  const { x, y, payload, textAnchor } = props
  const words = (payload?.value as string)?.split('-') || []

  return (
    <text x={x} y={y} textAnchor={textAnchor} fill="#666" fontSize={10}>
      {words.map((word: string, index: number) => (
        <tspan key={index} x={x} dy={index === 0 ? 0 : 12}>
          {word.toUpperCase()}
        </tspan>
      ))}
    </text>
  )
}

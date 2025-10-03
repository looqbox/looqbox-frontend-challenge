import { typeColorsToken } from '../tokens/typeColorsToken'

export const BadgeType = ({ type }: { type: string }) => {
  const color = typeColorsToken[type] || '#000000'

  return (
    <div
      style={{ borderColor: color }}
      className="border-2 rounded-lg px-2 py-1 text-sm w-[65px] flex items-center justify-center"
    >
      <p style={{ color }}>{type}</p>
    </div>
  )
}

const minWidthClasses: Record<number, string> = {
  80: 'min-w-[80px]',
  120: 'min-w-[120px]',
}

export const InfoBlock = ({
  label,
  value,
  minW = 120,
  upper = true,
}: {
  label: string
  value: string | number
  upper?: boolean
  minW?: number
}) => {
  return (
    <div
      className={`flex-1 text-center p-3 shadow rounded ${
        minWidthClasses[minW] ?? ''
      }`}
    >
      <p
        className={`font-semibold text-xs opacity-60 whitespace-nowrap ${
          upper ? 'uppercase' : ''
        }`}
      >
        {label}
      </p>
      <p className="font-bold text-lg whitespace-nowrap">{value}</p>
    </div>
  )
}

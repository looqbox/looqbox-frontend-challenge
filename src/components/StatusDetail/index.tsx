export function StatusDetail({
  name,
  base_stat,
}: {
  name: string
  base_stat: number
}) {
  return (
    <div key={name} className='w-full flex items-center'>
      <h5 className='w-1/3 font-bold mr-2 text-sm'>{name.toUpperCase()}</h5>

      <div className='flex flex-1 items-center gap-2'>
        <p className='text-sm w-6 text-end'>{base_stat}</p>

        <div className='h-2 bg-blue-200 flex flex-1 items-center rounded-full'>
          <div
            className='h-full bg-blue-500 rounded-full'
            style={{
              width: `${(base_stat * 100) / 300}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}

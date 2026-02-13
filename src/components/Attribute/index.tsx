export function Attribute({ title, value }: { title: string; value: string }) {
  return (
    <div className='w-[32%] py-2 flex flex-col gap-1 items-center justify-center shadow rounded-2xl bg-blue-100'>
      <h4 className='font-medium text-blue-500 text-sm'>{title}</h4>
      <p className='italic text-base font-bold text-blue-900'>{value}</p>
    </div>
  )
}

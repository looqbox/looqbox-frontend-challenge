type NameProps = {
  name: string
}

export const PokemonDetailsName = (data: NameProps) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold capitalize tracking-tight first:mt-0">
      {data.name || 'missingno'}
    </h2>
  )
}

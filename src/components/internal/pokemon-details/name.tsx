type NameProps = {
  value?: string
}

export const PokemonDetailsName = ({ value }: NameProps) => {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold capitalize tracking-tight first:mt-0">
      {value}
    </h2>
  )
}

type PokemonDescriptionProps = {
  description: string[]
}

export const PokemonDetailsDescription = (data: PokemonDescriptionProps) => {
  return (
    <div>
      {data.description.map((descriptionItem: string) => {
        return (
          <p key={crypto.randomUUID()} className="tracking-tight">
            {descriptionItem}
          </p>
        )
      })}
    </div>
  )
}

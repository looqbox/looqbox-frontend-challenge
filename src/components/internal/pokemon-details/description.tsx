type PokemonDescriptionProps = {
  description: string[]
}

export const PokemonDetailsDescription = ({
  description,
}: PokemonDescriptionProps) => {
  return (
    <div>
      {description.map((descriptionItem: string) => {
        return (
          <p key={crypto.randomUUID()} className="tracking-tight">
            {descriptionItem}
          </p>
        )
      })}
    </div>
  )
}

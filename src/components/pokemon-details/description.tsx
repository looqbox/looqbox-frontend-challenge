type DescriptionTypes = {
  description?: string
}

export const PokemonDetailsDescription = (data: DescriptionTypes) => {
  if (data?.description === 'missingno') {
    return (
      <>
        <p className="tracking-tight">
          MissingNo. (Japanese: けつばん Ketsuban, lit. "missing number"), as it
          is displayed in-game due to the ten-character limit in Western
          Generation I games, is a dual-type Bird/Normal glitch Pokémon in
          Pokémon Red and Blue, and a dual-type Normal/randomly named glitch
          type (which often has '9' in it) glitch Pokémon in Pokémon Yellow. It
          is arguably the best known glitch Pokémon, closely followed by 'M
          (00), and it is the easiest glitch Pokémon to find in the
          localizations. It has five distinct forms, but the most frequent forms
          (the Red/Blue and Yellow normal forms) share 36 index numbers each.
        </p>

        <p className="tracking-tight">
          In later generations, other glitch Pokémon are sometimes referred to
          as "a MissingNo.", such as ??????????, ?, and -----. Despite this, the
          name "MissingNo." is a misnomer in this case; they have little
          relation to the one found in Pokémon Red and Blue or Yellow.
        </p>

        <small>From bulbapedia</small>
      </>
    )
  }

  return (
    <>
      <p className="tracking-tight">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>

      <p className="tracking-tight">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source.
      </p>
    </>
  )
}

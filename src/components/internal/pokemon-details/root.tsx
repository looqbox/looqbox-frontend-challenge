import { ReactNode } from 'react'

type RootTypes = {
  children: ReactNode
}

export const PokemonDetailsRoot = ({ children }: RootTypes) => {
  return (
    <section
      data-testid="pokemon-screen"
      className="mx-auto flex min-h-screen max-w-[1400px] flex-col-reverse justify-center gap-4 tablet:grid tablet:grid-cols-4 tablet:items-start tablet:gap-8"
    >
      {children}
    </section>
  )
}

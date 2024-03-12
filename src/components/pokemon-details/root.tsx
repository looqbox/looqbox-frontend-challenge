import { ReactNode } from 'react'

type RootTypes = {
  children: ReactNode
}

export const PokemonDetailsRoot = ({ children }: RootTypes) => {
  return (
    <section className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-4 items-start justify-center gap-12">
      {children}
    </section>
  )
}

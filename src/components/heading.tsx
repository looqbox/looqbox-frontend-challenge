import { Link } from 'react-router-dom'

import pokeball from '../assets/pokeball.png'

export const Heading = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-8">
      <Link data-testid="link" to="/">
        <h1 className="xs:text-4xl flex scroll-m-20 items-center gap-2 text-2xl font-extrabold tracking-tight lg:text-5xl">
          <img src={pokeball} alt="" height={48} width={48} />
          National Pokedex
        </h1>
      </Link>
    </header>
  )
}

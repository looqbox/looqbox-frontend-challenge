import { Link } from 'react-router-dom'

import pokeball from '../assets/pokeball.png'
import { Search } from './search'

export const Heading = () => {
  return (
    <header className="flex w-full flex-col items-center justify-center gap-8 border-b pb-8">
      <Link to="/">
        <h1 className="flex scroll-m-20 items-center gap-2 text-4xl font-extrabold tracking-tight lg:text-5xl">
          <img src={pokeball} alt="" />
          National Pokedex
        </h1>
      </Link>

      <Search />
    </header>
  )
}

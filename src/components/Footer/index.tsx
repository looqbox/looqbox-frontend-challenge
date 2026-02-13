import { Github } from 'lucide-react'
import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className='w-full mt-8 bg-blue-200 border-t border-blue-200 text-blue-900'>
      <div className='max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='text-center md:text-left'>
          <h3 className='text-xl font-semibold'>
            Built for true Pokémon trainers
          </h3>
          <p className='text-sm mt-2 text-blue-700'>
            Powered by PokeAPI and crafted with passion.
          </p>
        </div>

        <div className='flex items-center gap-8 text-sm font-medium'>
          <Link
            to='https://pokeapi.co/docs/v2'
            target='_blank'
            className='transition duration-300 hover:text-blue-600'
          >
            PokeAPI Docs
          </Link>

          <Link
            to='https://github.com/NattanSilva'
            target='_blank'
            className='flex items-center gap-2 transition duration-300 hover:text-blue-600'
          >
            <Github size={18} />
            GitHub
          </Link>
        </div>
      </div>

      <div className='text-center text-xs text-blue-600 pb-6'>
        © {new Date().getFullYear()} PokéTown. All rights reserved.
      </div>
    </footer>
  )
}

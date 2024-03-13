import { Link } from 'react-router-dom'

import missingno from '../assets/missingno.gif'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <img src={missingno} className="h-60 w-60 object-contain" alt="" />

      <h1 className="text-4xl font-bold tracking-tight">
        Sorry, page not found!
      </h1>

      <p className="text-xl tracking-tight text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-500">
          início
        </Link>
      </p>
    </div>
  )
}

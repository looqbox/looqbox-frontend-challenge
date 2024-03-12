import { Link } from 'react-router-dom'

export function Error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">
        Oops! Encontramos um erro. Perdão pelo inconveniente.
      </h1>

      <p className="text-accent-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-500">
          início
        </Link>
      </p>
    </div>
  )
}

import { useRoutes } from 'react-router-dom'
import { Suspense } from 'react'
import { routes } from './routes'
import { LoadingIcon } from './components/icons/LoadingIcon'

function App() {
  const element = useRoutes(routes)

  return (
    <Suspense
      fallback={
        <div className="min-h-screen min-w-screen flex items-center justify-center bg-white">
          <LoadingIcon />
        </div>
      }
    >
      {element}
    </Suspense>
  )
}

export default App

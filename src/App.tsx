import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { AppRoutes } from 'global/routes/app.routes'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  )
}

export default App

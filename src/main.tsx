import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/index.css'
import { AppRouter } from '@/router'
import { Providers } from '@/components/layout/providers'
import { AppLayout } from '@/components/layout/app-layout'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Providers>
      <AppLayout>
        <AppRouter />
      </AppLayout>
    </Providers>
  </StrictMode>
) 
import { StyleProvider } from '@ant-design/cssinjs'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ConfigProvider, Layout } from 'antd'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'

import './index.css'
import Home from './pages/home/Index'
import NotFound from './pages/not-found/Index'
import PokemonDetail from './pages/pokemon-detail/Index'

const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/pokemon/:id',
    element: <PokemonDetail />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StyleProvider layer>
        <ConfigProvider
          theme={{
            cssVar: true,
            token: {
              colorPrimary: '#00D084',
              orange: '#FF6900',
              colorText: '#172121',
              colorBgContainer: '#FFFFFF'
            }
          }}
        >
          <Layout className="container">
            <RouterProvider router={router} />
          </Layout>
        </ConfigProvider>
      </StyleProvider>
    </QueryClientProvider>
  </StrictMode>
)

import { Header } from '@/components'
import { Container } from '@/components'
import { Layout } from 'antd'
import { Outlet } from 'react-router'

import './main-layout.css'

export function MainLayout() {
  return (
    <div className='app-layout'>
      <Header />

      <Layout.Content>
        <Container>
          <Outlet />
        </Container>
      </Layout.Content>
    </div>
  )
}

import { Outlet } from 'react-router-dom'

import { Flex } from 'antd'

import { Footer } from '@/components/footer'

export function Root() {
  return (
    <Flex vertical style={{ position: 'relative', minHeight: '100%' }}>
      <Outlet />
      <Footer />
    </Flex>
  )
}

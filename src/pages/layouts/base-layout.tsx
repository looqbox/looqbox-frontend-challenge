import { Outlet } from 'react-router-dom'

import { Heading } from '@/components/heading'
import { Search } from '@/components/search'

export const BaseLayout = () => {
  return (
    <section className="flex min-h-screen flex-col items-center gap-8 px-8 py-10">
      <Heading />

      <Search />

      <Outlet />
    </section>
  )
}

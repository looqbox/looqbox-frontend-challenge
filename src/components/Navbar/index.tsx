import { HamburgerMenu } from '../HamburgerMenu'

interface NavbarProps {
  title?: string
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className='w-full h-16 z-50 fixed bg-blue-100 shadow-md'>
      <nav className='w-full h-full px-[5%] flex items-center justify-between'>
        <h1 className='font-bold text-2xl text-blue-500'>{title}</h1>
        <HamburgerMenu />
      </nav>
    </header>
  )
}

import './Container.css'

export function Container({ children }: { children: React.ReactNode }) {
  return <div className='app-container'>{children}</div>
}

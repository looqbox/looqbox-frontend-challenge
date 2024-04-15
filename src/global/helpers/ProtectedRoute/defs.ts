import { ReactNode } from 'react'

export type ProtectedRouteProps = {
  username: string
  children: ReactNode
  pathToRedirect?: string
}

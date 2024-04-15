import React from 'react'
import { Navigate } from 'react-router-dom'

import { Routing } from 'global/routes/Routing'
import { ProtectedRouteProps } from './defs'

export function ProtectedRoute({
  username,
  children,
  pathToRedirect = Routing.LOGIN
}: ProtectedRouteProps) {
  if (!username) {
    return <Navigate to={pathToRedirect} replace />
  }

  return <React.Fragment>{children}</React.Fragment>
}

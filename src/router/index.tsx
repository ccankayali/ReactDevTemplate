import { createBrowserRouter, Navigate } from 'react-router-dom'

import { AuthLayout } from '../core/layouts/auth/AuthLayout'
import { PanelLayout } from '../core/layouts/panel/PanelLayouts'
import { NotFound } from '../core/pages/NotFound'
import { authRoutes } from '../modules/auth/routes'
import { dashboardRoutes } from '../modules/panel/dashboard/routes'
import { ROUTES } from './routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={ROUTES.auth.login.path} />
  },
  {
    element: <AuthLayout />,
    children: [...authRoutes]
  },
  {
    element: <PanelLayout />,
    children: [...dashboardRoutes]
  },
  {
    path: '*',
    element: <NotFound />
  }
])

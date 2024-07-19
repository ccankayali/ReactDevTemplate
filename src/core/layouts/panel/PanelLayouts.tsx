import { useCallback, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useTheme } from '@/core/hooks/useTheme'
import { useAuth } from '@/modules/auth/hooks/useAuth'
import { ROUTES } from '@/router/routes'

export const PanelLayout = () => {
  const navigate = useNavigate()
  const { accessToken, initUser, logout } = useAuth()
  const { mode, onDarkModeToggle } = useTheme()

  const handleLogout = useCallback(() => {
    logout()

    navigate({
      pathname: ROUTES.auth.login.path
    })
  }, [logout, navigate])

  useEffect(() => {
    if (accessToken) {
      initUser()
    } else {
      handleLogout()
    }
  }, [accessToken, handleLogout, initUser])

  return (
    <div>
      <h1>Panel Layout</h1>
      <pre>AccessToken: {accessToken}</pre>
      <pre>Mode: {mode}</pre>
      <button onClick={onDarkModeToggle}>Toggle Dark Mode</button>
      <Outlet />
    </div>
  )
}
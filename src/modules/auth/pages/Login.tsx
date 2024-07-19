import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/router/routes'
import { useAuth } from '../hooks/useAuth'
import { useEffect } from 'react'

export const Login = () => {
  const navigate = useNavigate()
  const { login, accessToken } = useAuth()

  const handleLogin = () => {
    login({ accessToken: Math.random().toString(16).slice(2)})
    navigate(ROUTES.dashboard.path)
  }

  useEffect(() => {
    if (accessToken) {
      navigate(ROUTES.dashboard.path)
    }
  }, [accessToken, navigate])

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

import { useNavigate } from 'react-router-dom'

import { ROUTES } from '@/router/routes'

export const Login = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(ROUTES.dashboard.path)
  }

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

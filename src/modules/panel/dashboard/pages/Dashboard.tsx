import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../../../router/routes'
import { useAuth } from '@/modules/auth/hooks/useAuth'

export const Dashboard = () => {
  const navigate = useNavigate()
  const { logout } = useAuth()

  const handleLogout = () => {
    logout
    navigate(ROUTES.auth.login.path)
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

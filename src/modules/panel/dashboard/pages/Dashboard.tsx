import { useNavigate } from 'react-router-dom'

import { ROUTES } from '../../../../router/routes'

export const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate(ROUTES.auth.login.path)
  }

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
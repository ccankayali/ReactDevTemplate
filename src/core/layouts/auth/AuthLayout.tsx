import { useAuth } from '@/modules/auth/hooks/useAuth'
import { Outlet } from 'react-router'

export const AuthLayout = () => {
  const { accessToken } = useAuth()
  
  return (
    <div>
      <h1>Authentication Layout</h1>
      <pre>AccessToken: {JSON.stringify(accessToken)}</pre>
      <Outlet />
    </div>
  )
}

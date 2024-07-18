import { Outlet } from 'react-router'

import { useTheme } from '@/core/hooks/useTheme'

export const PanelLayouts = () => {
  const { mode, onDarkModeToggle } = useTheme()

  return (
    <div>
      <h1>PanelLayouts</h1>
      <pre>{mode}</pre>
      <button onClick={onDarkModeToggle}>Toggle Dark Mode</button>
      <Outlet />
    </div>
  )
}

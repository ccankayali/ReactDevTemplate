import React from 'react'

import { Outlet } from 'react-router'

export const PanelLayouts = () => {
  return (
        <div>
            <h1>PanelLayouts</h1>
            <Outlet />            
        </div>
    )
}
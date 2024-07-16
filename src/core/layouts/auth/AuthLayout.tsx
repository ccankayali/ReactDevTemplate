import { Outlet } from 'react-router'

export const AuthLayout = () => {
    return (
        <div>
            <h1>Authentication Layout</h1>
            <Outlet />
        </div>
    )
}
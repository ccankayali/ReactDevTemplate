import './App.css'

import { RouterProvider } from 'react-router-dom'

import { Loading } from './core/components/Loading'
import { router } from './router'

function App() {
  return <RouterProvider router={router} fallbackElement={<Loading />} />
}

export default App

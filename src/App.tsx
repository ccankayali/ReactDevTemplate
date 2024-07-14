import './App.css'

import { useState } from 'react'

import viteLogo from '/vite.svg'


import Login from './modules/auth/pages/Login'

function App() {
  const [count, setCount] = useState(0)
  let testCount = 2
  testCount = 5

  return (
    <>
      <div>
        <h1>{import.meta.env.VITE_API_URL}</h1>
        <h2>{testCount}</h2>
        <Login />
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  )
}

export default App
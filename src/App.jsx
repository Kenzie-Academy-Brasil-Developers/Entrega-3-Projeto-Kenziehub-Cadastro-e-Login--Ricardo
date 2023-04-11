import { useState } from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Login } from './pages/Login'
import { RoutesMain } from './routes'

export const App = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <RoutesMain />
    </div>
  )
}


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.tsx'

import './Styles/login.css'
import { Login } from './Componentes/Login.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)

import './App.css'
import { Route, Routes } from "react-router-dom"
import { Login } from './Componentes/Login'
import { Products } from './Componentes/Products'
import { Orders } from './Componentes/Orders'

function App() {
  return (
  <div className="App">
    <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
  </div>
   
  )
}

export default App

import './Styles/App.css'
import { Route, Routes } from "react-router-dom"
import { Login } from './Componentes/Login'
import { Products } from './Componentes/Products'
import { Orders } from './Componentes/Orders'
import { ProductsSelected } from './Componentes/ProductsSelected'
// import { useState } from 'react'
// import { SelectedProduct } from './Services/FetchOrdersPost'


function App() {
  // const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>([]);

  // const handleSelectedProductsChange = (products: SelectedProduct[]) => {
  //     setSelectedProducts(products);
  // };
  return (
  <div className="App">
    <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/selected" element={<ProductsSelected />} />
            <Route path="/orders" element={<Orders />} />
          </Routes>
  </div>
   
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductsProvider from './Context/ProductsProvider'
import CartProvider from './Context/CartProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    
    <ProductsProvider>
      <CartProvider>
        <App  />
      </CartProvider>
    </ProductsProvider>
    
  </BrowserRouter>
)

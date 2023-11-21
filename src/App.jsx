import React from 'react'
import { Header } from './components/Header'
import './app.css'
import { Products } from './components/Products'
import { Cart } from './components/Cart'
import { products } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { CartProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <CartProvider>
      <div className='app'>
        <Header/>
        <Cart />
        <Products products={filteredProducts}/>
      </div>
    </CartProvider>
  )
}

export default App

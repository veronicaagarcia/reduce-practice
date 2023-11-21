import React from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { addToCart, cart, removeFromCart } = useCart()
  const checkedProductsInCart = product => {
    return cart.some(item => item.id === product.id)
  }
  return (
    <main className='products'>
        <ul>
            {
            products.map(product => {
              const isProductInCart = checkedProductsInCart(product)
              return (
                <li key={product.id}>
                    <img
                    src={product.thumbnail}
                    alt={product.title}
                    />
                    <div>
                        <strong>{product.title}</strong> ${product.price}
                    </div>
                    <div>
                        <button style={{ backgroundColor: isProductInCart ? '#d1965e' : '#202b38' }}
                        onClick={() => {
                          isProductInCart ? removeFromCart(product) : addToCart(product)
                        }}>{
                            isProductInCart ? <RemoveFromCartIcon /> : <AddToCartIcon />
                        }</button>
                    </div>
                </li>)
            })
            }
        </ul>
    </main>
  )
}

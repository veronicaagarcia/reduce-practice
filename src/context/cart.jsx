import React, { createContext, useReducer } from 'react'
import { reducerCart, initialStateReduce } from '../reducers/reducerCart'

export const CartContext = createContext()

function useReducerCart () {
  const [state, dispatch] = useReducer(reducerCart, initialStateReduce)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })

  const clearCart = () => dispatch({
    type: 'CLEART_CART'
  })

  return { state, addToCart, removeFromCart, clearCart }
}

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useReducerCart()

  return (
    <CartContext.Provider value={{
      cart: state,
      addToCart,
      removeFromCart,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  )
}

import { createContext, useState } from 'react'
// 1. Crea el contexto
export const CartContext = createContext()
// 2. Crea Provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {}
  const clearCart = () => {
    setCart([])// vuelve el cart a vacio
  }
  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

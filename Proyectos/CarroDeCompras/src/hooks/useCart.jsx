import { useContext } from 'react'
import { CartContext } from '../context/cart'

export const useCart = () => {
  const context = useContext(CartContext)

  if (context === undefined) { // verificar si se quiere utilizar dentro del provider
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}

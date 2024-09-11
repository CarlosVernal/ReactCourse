// contexto para el carrito de compras
import { createContext, useState } from 'react'
// 1. Crea el contexto
export const CartContext = createContext()
// 2. Crea Provider
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  // agregar un producto al carrito de compras
  const addToCart = product => {
    // setCart([...cart, product]) // crea una copia del array cart y agrega el contenido del array product (copia superficial) no considera la cantidad

    // chekear si el producto esta en el carrito y buscar su indice antes de agregarlo al carro
    const productInCartIndex = cart.findIndex(item => item.id === product.id)
    // si el producto esta en el carrito se copia la estrucura (copia profunda) en una nueva variable y se agrega la propiedad quantity y suma 1
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart) // util en arrays pequeños o poco complejos (no es la mas rapida)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }
    // si el producto no esta en el carrito
    setCart(prevState => ([
      ...prevState, { // copia del estado previo
        ...product, // copiamos el producto y agregamos la propiedad quantity en 1 en el estado actual
        quantity: 1
      }
    ]))
  }
  const clearCart = () => {
    setCart([]) // vuelve el cart a vacio
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}

// contexto para el carrito de compras
import { createContext, useReducer } from 'react'
import {
  reducer as cartReducer,
  initialState as cartInitialState
} from '../reducer/useCartReducer.js'

// 1. Crea el contexto
export const CartContext = createContext()

// useReducer para manejo de estados mas complejos,

// 2. Crea Provider
export function CartProvider ({ children }) {
  // se reemplazara el useState por el useReducer para ahorrar espacio y separar la logica del componente
  // const [cart, setCart] = useState([])

  // agregar un producto al carrito de compras
  // const addToCart = product => {
  //   // setCart([...cart, product]) // crea una copia del array cart y agrega el contenido del array product (copia superficial) no considera la cantidad

  //   // chekear si el producto esta en el carrito y buscar su indice antes de agregarlo al carro
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   // si el producto esta en el carrito se copia la estrucura (copia profunda) en una nueva variable y se agrega la propiedad quantity y suma 1
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart) // util en arrays pequeños o poco complejos (no es la mas rapida)
  //     newCart[productInCartIndex].quantity += 1
  //     return setCart(newCart)
  //   }
  //   // si el producto no esta en el carrito
  //   setCart(prevState => [
  //     ...prevState,
  //     {
  //       // copia del estado previo
  //       ...product, // copiamos el producto y agregamos la propiedad quantity en 1 en el estado actual
  //       quantity: 1
  //     }
  //   ])
  // }
  // const clearCart = () => {
  //   setCart([]) // vuelve el cart a vacio
  // }
  // const removeFromCart = product => {
  //   setCart(prevState => prevState.filter(item => item.id !== product.id))
  // }
  // const restItemFromCart = product => {
  //   if (product.quantity === 1) return removeFromCart(product)
  //   const productInCartIndex = cart.findIndex(item => item.id === product.id)
  //   // si el producto esta en el carrito se copia la estrucura (copia profunda) en una nueva variable y se agrega la propiedad quantity y resta 1
  //   if (productInCartIndex >= 0) {
  //     const newCart = structuredClone(cart) // util en arrays pequeños o poco complejos (no es la mas rapida)
  //     newCart[productInCartIndex].quantity -= 1
  //     return setCart(newCart)
  //   }
  // }
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })
  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: product
  })
  const restItemFromCart = product => dispatch({
    type: 'REST_ITEM_FROM_CART',
    payload: product
  })

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        clearCart,
        removeFromCart,
        restItemFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

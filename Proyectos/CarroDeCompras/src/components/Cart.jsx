import './Cart.css'
import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart.jsx'
import { CartItem } from './CartItem.jsx'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart, restItemFromCart } = useCart()

  return (
    <>
      {/* Enlazamos el Label (incono) con un el input a travez del htmlFor y el id */}
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
        <ul>
          {/* <li> Elemento li estatico para revisar el carro de compras
            <img src='https://cdn.dummyjson.com/products/images/groceries/Apple/thumbnail.png' alt='Apple' />
            <div>
              <strong>Apple</strong> - $1.99
            </div>
            <footer>
              <small>Qty :1</small>
              <button> + </button>
            </footer>
          </li> */}
          {cart.map(product => (
            <CartItem
              addToCart={() => addToCart(product)}
              restItemFromCart={() => restItemFromCart(product)}
              key={product.id}
              {...product}
            />
          ))}
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}

export function CartItem ({ title, thumbnail, price, quantity, addToCart, restItemFromCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div>
        <strong>{title}</strong> - ${price * quantity}
      </div>
      <footer>
        <button onClick={restItemFromCart}> - </button>
        <small>Qty :{quantity}</small>
        <button onClick={addToCart}> + </button>
      </footer>
    </li>
  )
}

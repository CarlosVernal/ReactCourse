export function CartItem ({ title, thumbnail, price, quantity, addToCart }) {
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
        {/* HAY QUE RESTAR UN PRODUCTO <button onClick={ReduceItemFromCart}> + </button> */}
        <small>Qty :{quantity}</small>
        <button onClick={addToCart}> + </button>
      </footer>
    </li>
  )
}

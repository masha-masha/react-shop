const CartItem = ({ id, name, price, quantity, removeFromCart, incQuantity, decQuantity }) => {
  return (
    <li className="collection-item">
      {name} 
      <span onClick={() => decQuantity(id)}className="my-btn white-text">-</span>
       {quantity} шт
       <span onClick={() => incQuantity(id)} className="my-btn white-text">+</span> 
      = {price * quantity} руб.
      <span className="secondary-content"><i onClick={() => removeFromCart(id)}className="material-icons close">close</i></span>
    </li>
  )
}

export default CartItem
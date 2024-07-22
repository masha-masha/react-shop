import { useContext } from 'react'
import { ShopContext } from "../context";

const Cart = ({ quantity = 0}) => {
  const { handleCartShow } = useContext(ShopContext)
  return (
    <div
      className='cart deep-orange darken-1 white-text'
      onClick={handleCartShow}
      >
        <i className="material-icons">shopping_basket</i>
        { quantity ? <span className='cart-quantity'>{quantity}</span> : 0 }
    </div>
  )
}

export default Cart
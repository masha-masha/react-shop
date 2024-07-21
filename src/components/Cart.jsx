import React from 'react'

const Cart = ({ quantity = 0, handleCartShow }) => {
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
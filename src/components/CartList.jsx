import CartItem from "./CartItem";
import { useContext } from 'react'
import { ShopContext } from "../context";

const CartList = () => {
  const { order, handleCartShow } = useContext(ShopContext)
 const totalPrice = order.reduce((acc, { price, quantity }) => acc + price * quantity, 0);

  return (
    <ul className="collection cart-list">
      <li className="collection-item active">Корзина
      <i onClick={handleCartShow}className="material-icons right">close</i>
      </li>
      {order.length ? (
        order.map((good) => {
          return (
            <CartItem
              key={good.id}
              id={good.id}
              name={good.name}
              price={good.price}
              quantity={good.quantity}
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        <span>Общая стоимость: {totalPrice} руб.</span>
        <button className="secondary-content teal lighten-2 border"> Оформить</button>
      </li>
    </ul>
  );
};

export default CartList;

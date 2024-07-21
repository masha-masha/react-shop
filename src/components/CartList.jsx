import CartItem from "./CartItem";

const CartList = ({ order, handleCartShow, removeFromCart, incQuantity, decQuantity }) => {

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
              removeFromCart={removeFromCart}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          );
        })
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active">
        <span>Общая стоимость: {totalPrice} руб.</span>
        <button className="secondary-content teal lighten-2"> Оформить</button>
      </li>
    </ul>
  );
};

export default CartList;

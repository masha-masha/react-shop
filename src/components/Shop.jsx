import React, { useState, useEffect } from "react";
import { API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isCartShow, setCartShow] = useState(false);
  const [alertName, setAlertName] = useState("");

  const isEnglish = (text) => /^[a-zA-Z0-9\s]+$/.test(text);

  const addToCart = (item) => {
    const itemIndex = order.findIndex((el) => el.id === item.id);
    if (itemIndex === -1) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const updatedOrder = order.map((el, i) =>
        i === itemIndex ? { ...el, quantity: el.quantity + 1 } : el
      );
      setOrder(updatedOrder);
    }
    setAlertName(item.name);
  };
  const incQuantity = (id) => {
    const updatedOrder = order.map((el) =>
      id === el.id ? { ...el, quantity: el.quantity + 1 } : el
    );
    setOrder(updatedOrder);
  };
  const decQuantity = (id) => {
    const updatedOrder = order.map((el) =>
      id === el.id
        ? { ...el, quantity: el.quantity > 0 ? el.quantity - 1 : 0 }
        : el
    );
    setOrder(updatedOrder);
  };

  const removeFromCart = (id) => {
    const filteredOrder = order.filter((item) => item.id !== id);
    setOrder(filteredOrder);
  };

  const handleCartShow = () => setCartShow(!isCartShow);

  const closeAlert = () => {
    setAlertName("");
  };

  useEffect(function getGoods() {
    try {
      fetch(API_URL, {
        headers: {
          Authorization: "a7341d8d-0fcb8a5b-3b3cdb4f-3b5d4efd",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          data.featured &&
            setGoods(
              data.featured.filter(
                (item) =>
                  !isEnglish(item.name) &&
                  !isEnglish(item.description) &&
                  item.description
              )
            );
          setLoading(false);
        });
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <main className="content container">
      <Cart quantity={order.length} handleCartShow={handleCartShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList addToCart={addToCart} order={order} goods={goods} />
      )}
      {isCartShow && (
        <CartList
          order={order}
          handleCartShow={handleCartShow}
          removeFromCart={removeFromCart}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      )}
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;

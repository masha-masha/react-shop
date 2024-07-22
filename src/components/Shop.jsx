/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext } from "react";
import { API_URL } from "../config";
import Preloader from "./Preloader";
import GoodsList from "./GoodsList";
import Cart from "./Cart";
import CartList from "./CartList";
import Alert from "./Alert";
import { ShopContext } from "../context";

const Shop = () => {
  const {goods, setGoods, loading, order, isCartShow, alertName} = useContext(ShopContext);

  const isEnglish = (text) => /^[a-zA-Z0-9\s]+$/.test(text);


  useEffect(function getGoods() {
    try {
      fetch(API_URL, {
        headers: {
          Authorization: "a7341d8d-0fcb8a5b-3b3cdb4f-3b5d4efd",
        },
      })
        .then((response) => response.json())
        .then((data) => {
            setGoods(
              data.featured.filter(
                (item) =>
                  !isEnglish(item.name) &&
                  !isEnglish(item.description) &&
                  item.description
              )
            );
        });
    } catch (e) {
      console.error(e);
    }
  }, []);
  return (
    <main className="content container">
      <Cart quantity={order.length}  />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList order={order} goods={goods} />
      )}
      {isCartShow && (
        <CartList/>
      )}
      {alertName && <Alert/>}
    </main>
  );
};

export default Shop;

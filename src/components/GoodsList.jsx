import GoodsItem from "./GoodsItem";
import { useContext } from 'react'
import { ShopContext } from "../context";


const GoodsList = () => {
  const { goods = [], order} = useContext(ShopContext);

  
  return (
    <div className="goods">
      {goods.map((good) => {
        return <GoodsItem 
        key={good.id}
        id={good.id}
        name={good.name}
        price={good.price}
        description={good.description}
        full_background={good.full_background}
        order={order}
        good={good}
        />;
      })}
    </div>
  );
};

export default GoodsList;

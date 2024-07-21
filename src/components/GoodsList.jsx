import GoodsItem from "./GoodsItem";

const GoodsList = (props) => {
  const { goods = [], order, addToCart} = props;

  
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
        addToCart={addToCart}
        order={order}
        good={good}
        />;
      })}
    </div>
  );
};

export default GoodsList;

import { useContext } from "react";
import { ShopContext } from "../context";

const GoodsItem = ({ id, name, description, price, full_background}) => {
   const { addToCart } = useContext(ShopContext);
  return (
     
    <div className="card">
    <div className="card-image">
    <img onError={(e) => e.target.src = `https://placehold.jp/30/ff8c00/ffffff/300x300.png?text=${name}`} src={full_background} alt={name} />
    </div>
    <div className="card-content">
      <span className="card-title">{name}</span>
      <p>{description}</p>
    </div>
    <div className="card-action">
      <button
        onClick={() => addToCart({id, name, price})}
        className="btn"
      >
        Купить
      </button>
      <span className="right" style={{ fontSize: '1.8rem' }}>
        {price} руб.
      </span>
    </div>
  </div>
);
};

export default GoodsItem;

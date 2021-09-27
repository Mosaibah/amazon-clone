import React from "react";
import { useStateValue } from "../StateProvider";

const CheckoutProduct = ({ item }) => {
    const [{basket}, dispatch] = useStateValue()
    
  const { title, price, image, id, rating } = item;

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      payload: id,
    });
  };

  return (
    <div className="row mb-5 mb-sm3 text-center text-sm-start">
      <>
        <div className="col-12  col-sm-3">
          <img style={{ width: 100, height: 100 }} src={image} alt="" />
        </div>
        <div className="col-sm-9">
          <p className="fs-6 pt-2 pt-sm-0">{title}</p>
          <div className="">${price}</div>
          <div className="">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <i key={i} className="bi bi-star-fill text-info"></i>
              ))}
          </div>
          <div className="btn btn-warning mt-2 mt-sm-3 mx-2 btn-sm" onClick={removeFromBasket}>Remove from basket</div>
        </div>
      </>
    </div>
  );
};

export default CheckoutProduct;

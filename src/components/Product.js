import React from "react";
import { useStateValue } from "../StateProvider";

const Product = ({title, price, image, rating, id}) => {
    const [{basket}, dispatch] = useStateValue()


    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            payload: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
  return (
    <div className="card">
      <div className="card-body">
        <p className="lead fs-5">
          {title}
        </p>
        <p>
          $ <span className="fw-bolder">{price}</span>
        </p>
        {
            Array(rating).fill().map((_,i) => (
                <i key={i} className="bi bi-star-fill text-info"></i>
            ))
        }
        <div className="text-center">

        <img style={{width: 100, height: 100}} src={image} alt="" />
        <div className="btn btn-warning w-100 mt-2" style={{opacity:'0.90'}} onClick={addToBasket}>
            add to basket
        </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

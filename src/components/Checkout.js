import React from 'react'
import { useStateValue } from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue()
    

    return (
        <div className="container">
            <div className="row mt-3 mb-5">

                <div className="col-sm-8 ">
                    <div className="checkout-image">
                        <img src="https://m.media-amazon.com/images/I/61CiqVTRBEL._SX3000_.jpg" className="w-100"  alt="" />
                    </div>

                        <h2 className="border-bottom border-muted border-2 pb-3 mt-3 mb-4 text-center text-sm-start">
                            Your Shopping Basket
                        </h2>
                        {
                            basket.map((item,i) => (
                                <div key={i}>
                                    <CheckoutProduct 
                                           item={item} 
                                    />
                                </div>
                            ))
                        }
                </div>

                <div className="col-sm-4">
                    <Subtotal/>
                </div>

            </div>
        </div>
    )
}

export default Checkout

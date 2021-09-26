import React from 'react'
import { useStateValue } from '../StateProvider'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer'
const Subtotal = () => {
    const [{basket}, dispatch] = useStateValue()

    
    const total = basket.reduce((n, {price}) => n + price, 0)
    return (
        <div className="card">
            <div className="card-body">
                <CurrencyFormat 
                    renderText={(value) => (
                        <>
                        <div>
                            <p>Subtotal ({basket.length} items): <span className="fw-bolder">{value}</span></p>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                This order contain a gift
                            </label>
                        </div>
        
                        <div>
                            <div className="btn btn-warning w-100 mt-3">
                                Proceed to checkout
                            </div>
                        </div>
                        </>
                        )}
                        decimalScale={2}
                        value={getBasketTotal(basket)}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                    />
        
                    </div>
        </div>
    )
}

export default Subtotal

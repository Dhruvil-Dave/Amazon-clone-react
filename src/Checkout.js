import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const[{basket, user}, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://disruptiveadvertising.com/static/c653234a6e43c8c1c2c33cb2ac5e4477/7f757/Screen-Shot-2018-10-29-at-11.50.03-AM.png"/>

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your Shopping Basket</h2>
                    {basket.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout

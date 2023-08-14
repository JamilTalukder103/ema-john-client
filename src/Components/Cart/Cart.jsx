import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    let sum = 0;
    let totalShippong = 0;
    let quantity = 0;

    for (const product of cart) {

        sum = sum + product.price * product.quantity;
        totalShippong = product.shipping + totalShippong * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = sum * 7 / 100;
    const totalAmount = sum + totalShippong + tax;

    return (
        <div className='cart'>
            <h2>Order Summary </h2>
            <h4>Selected Items: {quantity}</h4>
            <h4>price: ${sum}</h4>
            <h4>tax: ${tax.toFixed(2)}</h4>
            <h4>Total shipping : {totalShippong}</h4>
            <h2>Grand total: {totalAmount.toFixed(2)}</h2>
        </div>
    );
};

export default Cart;
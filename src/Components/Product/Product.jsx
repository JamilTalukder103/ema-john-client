import React from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';
const Product = ({ product, handelAddtoCart }) => {

    const { img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button onClick={() => handelAddtoCart(product)} className='btn'>< FaShoppingCart className='fa-icon' />Add To Cart</button>
        </div>
    );
};

export default Product;
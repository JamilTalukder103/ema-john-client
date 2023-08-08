import React from 'react';
import './Product.css';
import { FaShoppingCart } from 'react-icons/fa';
const Product = ({ product }) => {
    console.log(product)
    const { id, img, name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <hp>${price}</hp>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button className='btn'>< FaShoppingCart className='fa-icon' />Add To Cart</button>
        </div>
    );
};

export default Product;